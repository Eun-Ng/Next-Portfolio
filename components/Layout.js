import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      <div className=''>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
