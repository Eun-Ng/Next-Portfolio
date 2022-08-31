import Head from 'next/head';
import Layout from '../components/Layout';
import MainContents from '../components/home/MainContents';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>남궁은 포트폴리오</title>
        <meta property='og:title' content='남궁은 포트폴리오' />
        <meta property='og:description' content='남궁은 포트폴리오' />
        <meta
          property='og:url'
          content='https://eunng-next-portfolio.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccb1c504-bdcf-44ea-b9fb-2352e54845fb%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-08-28_11.30.46.png?table=block&id=79217358-2a9a-460f-bfad-0012ad6e72a5&spaceId=483c9fd4-c987-4207-8106-0d8533836827&width=1920&userId=46e4c9c1-fdf5-456e-94ab-d568bbfdad77&cache=v2'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 md:flex-row flex-col items-center'>
          <MainContents />
        </div>
      </section>
    </Layout>
  );
}
