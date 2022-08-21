import Layout from '../components/Layout';
import Head from 'next/head';
import ProjectItems from '../components/projects/Project-items';
import {TOKEN, DATABASE_ID} from '../config';

const Projects = ({projects}) => {
  return (
    <Layout>
      <Head>
        <title>Eun - Portfolio</title>
        <meta name='description' content='남궁은 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>총 프로젝트: {projects.results.length}개</h1>
      {projects.results.map((aProject) => (
        <ProjectItems key={aProject.id} data={aProject} />
      ))}
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
