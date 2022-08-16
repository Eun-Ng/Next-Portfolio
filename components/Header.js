const Header = () => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>Portfolio</span>
          </a>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-gray-900' href=''>
              Home
            </a>
            <a className='mr-5 hover:text-gray-900'>Projects</a>
            <a
              className='mr-5 hover:text-gray-900'
              href='https://eun-ng.tistory.com/'
              target='_blank'
              rel='noreferrer'
            >
              Blog
            </a>
            <a
              className='mr-5 hover:text-gray-900'
              href='https://github.com/Eun-Ng'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
