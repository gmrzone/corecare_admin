import Header from '../common/Header'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <>
            <div id="modal">

            </div>
            <header id="header">
               <Header />
            </header>
            <main id="main">
                {children}
            </main>
            <footer id="footer">
                <Footer />
            </footer>   
        </>
    )
}


export default Layout   