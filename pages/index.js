import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eun - Portfolio</title>
        <meta name='description' content='남궁은 포트폴리오' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline'>Home</h1>
    </Layout>
  );
}
