import Footer from './Footer';
import style from '../../style/login-layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <main id="main" className={style.main}>
        {children}
      </main>
      <footer id="footer" className={style.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
