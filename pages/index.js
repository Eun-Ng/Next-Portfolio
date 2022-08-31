import Head from 'next/head';
import Layout from '../components/Layout';
import MainContents from '../components/home/MainContents';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>남궁은 포트폴리오</title>
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='남궁은 포트폴리오' />
        <meta property='og:title' content='남궁은 포트폴리오' />
        <meta
          property='og:description'
          content='Next.j로 만든 포트폴리오 사이트입니다..'
        />
        <meta property='og:image' content='../public/portfolio_main_img.png' />
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
