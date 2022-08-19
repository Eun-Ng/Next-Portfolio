import Layout from '../components/Layout';
import Head from 'next/head';
import {TOKEN, DATABASE_ID} from '../config';

const Projects = ({projectNames}) => {
  console.log(projectNames);
  return (
    <>
      <Layout>
        <Head>
          <title>Eun - Portfolio</title>
          <meta name='description' content='남궁은 포트폴리오' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>프로젝트</h1>
      </Layout>
    </>
  );
};

export default Projects;

// 처음 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
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

  const projectNames = projects.results.map((aProject) => aProject.properties);

  console.log(`projectNames: ${projectNames}`);

  return {
    props: {projectNames}, // will be passed to the page component as props
  };
}
