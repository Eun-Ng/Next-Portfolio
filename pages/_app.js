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
        url: '../public/portfolio_main_img.png',
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
