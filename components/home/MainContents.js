import Link from 'next/link';
import Animation from './Animation';

const MainContents = () => {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 남궁은입니다!
          <br />
          프론트엔드 개발자를 꿈꾸고 있습니다!
        </h2>

        <p className='mb-8 leading-relaxed text-xl'>
          꾸준하게 성장하는 개발자가 목표입니다. 리액트를 주로 다루며,
          프론트엔드 생태계 전반에 관심이 많습니다.
        </p>
        <div className='flex justify-center'>
          <Link href='/Projects'>
            <a className='projectBtn'>My Projects</a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full'>
        <Animation />
      </div>
    </>
  );
};

export default MainContents;
