const Layout = ({ children }) => {
    return (
        <>
            <div id="modal">

            </div>
            <header id="header">
                <h1>Header</h1>
            </header>
            <main id="main">
                {children}
            </main>
            <footer id="footer">
                <h1>Footer</h1>
            </footer>   
        </>
    )
}


export default Layout