import style from "../../style/main-layout.module.scss";
import Sidebar from "./Sidebar";
import ProfileBox from "./ProfileBox";
import MessageDropDown from './MessagesDropDown';
import NotificationDropDown from './NotificationDropDown'
const Navbar = () => {
    return (
        <nav className={`${style.navbar} ui container`}>
            <Sidebar />
            <div className={style.logo}>
                <img src="/logo-full-black.svg" alt="logo" width={176} />
            </div>
            <div className={style["nav-right-list"]}>
                {/* <div className={style["nav-right-item"]}>
                    <i className="bell outline icon" />
                </div>
                <div className={style["nav-right-item"]}>
                    <i className="envelope outline icon" />
                </div> */}
                <MessageDropDown />
                <NotificationDropDown />
                <ProfileBox />
            </div>
        </nav>
    );
};

export default Navbar;
