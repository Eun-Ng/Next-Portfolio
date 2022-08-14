const Footer = () => {
  return (
    <>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='ml-3 text-xl'>남궁은 포트폴리오</span>
          </a>

          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a className='text-gray-500' href='mailto:eunng.dev@gmail.com'>
              Contact Me
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
