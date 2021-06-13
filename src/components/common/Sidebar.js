import style from "../../style/main-layout.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SideDrawerContext } from "../../context/SideDrawerContext";
import { useHistory } from 'react-router-dom'
import SliderDropDownItem from './SliderDropDownItem'
const Sidebar = () => {
    const { sideDrawerActive, toggleSideDrawer, closeDrawer, openDrawer } = useContext(SideDrawerContext);
    const history = useHistory()
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
            <div className={`${style.slider} ${sideDrawerActive && style["slider-active"]}`}>
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
                    <SliderDropDownItem name="Blog" activeTab={history.location.pathname === "/posts" || history.location.pathname === "/comments"} sideDrawerActive={sideDrawerActive}>
                            <li onClick={itemClick}>
                                <Link className={style["slider-item"]} to="/posts">
                                    <i className="edit icon" />
                                    <span className={style["slider-item--text"]}>Posts</span>
                                </Link>
                            </li>
                            <li onClick={itemClick}>
                                <Link className={style["slider-item"]} to="/comments">
                                <i className="comment icon" />
                                    <span className={style["slider-item--text"]}>Comments</span>
                                </Link>
                            </li>
                    </SliderDropDownItem>
                    <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/coupons" && style["active-item"]}`} to="/coupons">
                            <i className="gift icon" />
                            <span className={style["slider-item--text"]}>Coupons</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

