import style from '../../style/main-layout.module.scss';
import Sidebar from './Sidebar'
const Navbar = () => {
    
    return (
    <nav className={`${style.navbar} ui container`}>
        <Sidebar />
    </nav>
    );
};

export default Navbar;
