import Layout from '../components/Layout';
import Head from 'next/head';
import ProjectItems from '../components/projects/Project-items';
import {TOKEN, DATABASE_ID} from '../config';

const Projects = ({projects}) => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen pr-6 mb-10'>
        <Head>
          <title>Eun - Portfolio</title>
          <meta name='description' content='남궁은 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-bold sm:text-4xl'>
          총 프로젝트:
          <span className='pl-4 text-orange-500'>
            {projects.results.length}
          </span>
          개
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 py-10 m-6 gap-8 w-full'>
          {projects.results.map((aProject) => (
            <ProjectItems key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

// 처음 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({page_size: 100}),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: {projects}, // will be passed to the page component as props
  };
}
