import Header from "../common/Header";
// import Footer from "./Footer";
import style from "../../style/main-layout.module.scss";
import { useContext } from "react";
import { SideDrawerContext } from "../../context/SideDrawerContext";
const Layout = ({ children }) => {
    const { sideDrawerActive } = useContext(SideDrawerContext);
    return (
        <>
            <div id="modal" className={style.modal}></div>
            <header id="header" className={style.header}>
                <Header />
            </header>
            <main id="main" className={`ui container main ${style.main} ${sideDrawerActive && "drawer-active"}`}>
                {children}
            </main>
            {/* <footer id="footer" className={style.footer}>
                <Footer />
            </footer> */}
        </>
    );
};

export default Layout;
