import style from "../../style/main-layout.module.scss";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { SideDrawerContext } from "../../context/SideDrawerContext";
const Sidebar = () => {
    const { sideDrawerActive, toggleSideDrawer, closeDrawer, openDrawer } = useContext(SideDrawerContext);
    const sliderList = useRef()
    const itemClick = () => {
        if (document.body.clientWidth < 768){
            setTimeout(closeDrawer, 100)
        }
    }
    return (
        <div className={style.sidebar}>
            <div className={`${style["sidebar-opener"]} ${sideDrawerActive && style.active}`} onClick={toggleSideDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${style.slider} ${sideDrawerActive && style["slider-active"]}`} ref={sliderList}>
                <ul className={style["slider-items-list"]} onMouseOver={openDrawer} onMouseOut={closeDrawer} onClick={itemClick}>
                    <li>
                        <Link className={`${style["slider-item"]} ${style["active-item"]}`} to="/" >
                            <i className="home icon" />
                            <span className={style["slider-item--text"]}>DashBoard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style["slider-item"]} to="/employees">
                            <i className="briefcase icon" />
                            <span className={style["slider-item--text"]}>Employees</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style["slider-item"]} to="/users">
                            <i className="users icon" />
                            <span className={style["slider-item--text"]}>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style["slider-item"]} to="/orders">
                            <i className="phone icon" />
                            <span className={style["slider-item--text"]}>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style["slider-item"]} to="/orders">
                            <i className="dashcube icon" />
                            <span className={style["slider-item--text"]}>Orders</span>
                        </Link>
                    </li>
                    <li onClick={(e) => e.stopPropagation()}>
                        <span className={style["slider-item"]}>
                            <i className="blogger icon" />
                            <span className={style["slider-item--text"]}>Blog</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
