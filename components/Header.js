import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBlog, faBoxArchive} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import DarkModeToggleBtn from './DarkModeToggleBtn';

const Header = () => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
          <Link href='/'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <span className='ml-3 text-3xl'>My Portfolio</span>
            </a>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center justify-center text-xl'>
            <Link href='/Projects'>
              <a className='mr-5 hover:text-gray-900'>
                <FontAwesomeIcon icon={faBoxArchive} />
                Projects
              </a>
            </Link>
            <Link href='https://eun-ng.tistory.com/'>
              <a
                className='mr-5 hover:text-gray-900'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faBlog} />
                Blog
              </a>
            </Link>
            <Link href='https://github.com/Eun-Ng'>
              <a
                className='mr-5 hover:text-gray-900'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </Link>
            <DarkModeToggleBtn />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
