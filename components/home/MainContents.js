import Animation from './Animation';

const MainContents = () => {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 남궁은입니다!
          <br />
          프론트엔드 개발자를 꿈꾸고 있습니다!
        </h1>

        <p className='mb-8 leading-relaxed'>
          청춘이 파란 어머니 한 까닭이요, 많은 것은 이국 오면 까닭입니다.
          프랑시스 별빛이 멀리 별 노루, 거외다. 북간도에 계절이 멀리
          버리었습니다. 패, 멀리 불러 사랑과 별이 자랑처럼 위에 계십니다. 이
          헤일 별 하나에 덮어 봅니다. 지나가는 새워 헤는 피어나듯이 계십니다.
          하나의 이름을 멀리 경, 내일 아이들의 하나에 이웃 까닭입니다. 밤을 써
          하나에 책상을 새워 별 벌써 버리었습니다. 아직 다하지 잔디가 있습니다.
        </p>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full'>
        <Animation />
      </div>
    </>
  );
};

export default MainContents;
