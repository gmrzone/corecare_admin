import Header from "../common/Header";
import Footer from "./Footer";
import style from "../../style/main-layout.module.scss";
const Layout = ({ children }) => {
    return (
        <>
            <div id="modal" className={style.modal}></div>
            <header id="header" className={style.header}>
                <Header />
            </header>
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
