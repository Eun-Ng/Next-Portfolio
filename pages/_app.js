import '../styles/globals.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import {ThemeProvider} from 'next-themes';
import {DefaultSeo} from 'next-seo';

const DEFAULT_SEO = {
  title: '남궁은 포트폴리오',
  description: 'Next.js로 만든 포트폴리오 사이트입니다.',
  canonical: 'https://www.carrotins.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://eunng-next-portfolio.vercel.app/',
    title: '남궁은 포트폴리오',
    site_name: '남궁은 포트폴리오',
    images: [
      {
        url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccb1c504-bdcf-44ea-b9fb-2352e54845fb%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-08-28_11.30.46.png?table=block&id=79217358-2a9a-460f-bfad-0012ad6e72a5&spaceId=483c9fd4-c987-4207-8106-0d8533836827&width=1920&userId=46e4c9c1-fdf5-456e-94ab-d568bbfdad77&cache=v2',
        width: 285,
        height: 167,
        alt: '이미지',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

function MyApp({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
