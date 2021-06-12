import style from "../../style/main-layout.module.scss";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { SideDrawerContext } from "../../context/SideDrawerContext";
import { useHistory } from 'react-router-dom'
const Sidebar = () => {
    const { sideDrawerActive, toggleSideDrawer, closeDrawer, openDrawer } = useContext(SideDrawerContext);
    const sliderList = useRef()
    const history = useHistory()
    console.log(history.location.pathname)
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
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/" && style["active-item"]}`} to="/" >
                            <i className="home icon" />
                            <span className={style["slider-item--text"]}>DashBoard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/employees" && style["active-item"]}`} to="/employees">
                            <i className="briefcase icon" />
                            <span className={style["slider-item--text"]}>Employees</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/users" && style["active-item"]}`} to="/users">
                            <i className="users icon" />
                            <span className={style["slider-item--text"]}>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/orders" && style["active-item"]}`} to="/orders">
                            <i className="phone icon" />
                            <span className={style["slider-item--text"]}>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/services" && style["active-item"]}`} to="/services">
                            <i className="wrench icon" />
                            <span className={style["slider-item--text"]}>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/coupons" && style["active-item"]}`} to="/coupons">
                            <i className="gift icon" />
                            <span className={style["slider-item--text"]}>Coupons</span>
                        </Link>
                    </li>
                    <li onClick={(e) => e.stopPropagation()}>
                        <span className={style["slider-item"]}>
                            <i className="blogger icon" />
                            <span className={style["slider-item--text"]}>Blog</span>
                        </span>
                    </li>
                    <li onClick={(e) => e.stopPropagation()}>
                        <span className={style["slider-item"]}>
                        <i className="comment icon" />
                            <span className={style["slider-item--text"]}>Posts</span>
                        </span>
                    </li>
                    <li onClick={(e) => e.stopPropagation()}>
                        <span className={style["slider-item"]}>
                        <i className="comment icon" />
                            <span className={style["slider-item--text"]}>Comments</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

