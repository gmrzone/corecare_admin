import style from "../../style/main-layout.module.scss";
import { useContext } from "react";
import { SideDrawerContext } from "../../context/SideDrawerContext";
import { useHistory } from 'react-router-dom'
import SliderDropDownItem from './SliderDropDownItem'
import NewLink from './Link';
const Sidebar = () => {
    const { sideDrawerActive, toggleSideDrawer, closeDrawer, openDrawer } = useContext(SideDrawerContext);
    const history = useHistory()
    const itemClick = () => {
        if (document.body.clientWidth < 768){
            setTimeout(closeDrawer, 100)
        }
    }
    const DesktopSliderMouseOver = () => {
        if (window.innerWidth > 768){
            openDrawer()
        }
    }
    const DesktopSliderMouseOut = () => {
        if (window.innerWidth > 768){
            closeDrawer()
        }
    }
    return (
        <div className={style.sidebar} onMouseOver={DesktopSliderMouseOver} onMouseOut={DesktopSliderMouseOut}>
            <div className={`${style["sidebar-opener"]} ${sideDrawerActive && style.active}`} onClick={toggleSideDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${style.slider} ${sideDrawerActive && style["slider-active"]}`}>
                <ul className={style["slider-items-list"]} onClick={itemClick}>
                    <li>
                        <NewLink className={`${style["slider-item"]} ${history.location.pathname === "/" && style["active-item"]}`} to="/" >
                            <i className="home icon" />
                            {/* <i className="chart pie icon" /> */}
                            <span className={style["slider-item--text"]}>DashBoard</span>
                        </NewLink>
                    </li>
                    <li>
                        <NewLink className={`${style["slider-item"]} ${history.location.pathname === "/employees" && style["active-item"]}`} to="/employees">
                            <i className="briefcase icon" />
                            <span className={style["slider-item--text"]}>Employees</span>
                        </NewLink>
                    </li>
                    <li>
                        <NewLink className={`${style["slider-item"]} ${history.location.pathname === "/users" && style["active-item"]}`} to="/users">
                            <i className="users icon" />
                            <span className={style["slider-item--text"]}>Users</span>
                        </NewLink>
                    </li>
                    <li>
                        <NewLink className={`${style["slider-item"]} ${history.location.pathname === "/orders" && style["active-item"]}`} to="/orders">
                            <i className="phone icon" />
                            <span className={style["slider-item--text"]}>Orders</span>
                        </NewLink>
                    </li>
                    {/* <li>
                        <Link className={`${style["slider-item"]} ${history.location.pathname === "/services" && style["active-item"]}`} to="/services">
                            <i className="wrench icon" />
                            <span className={style["slider-item--text"]}>Services</span>
                        </Link>
                    </li> */}
                    <SliderDropDownItem name="Products" activeTab={history.location.pathname === "/services" || history.location.pathname === "/subcategory"} sideDrawerActive={sideDrawerActive} iconClass="truck icon">
                            <li onClick={itemClick}>
                                <NewLink className={style["slider-item"]} to="/subcategory">
                                    <i className="sitemap icon" />
                                    <span className={style["slider-item--text"]}>Subcategory</span>
                                </NewLink>
                            </li>
                            <li onClick={itemClick}>
                                <NewLink className={style["slider-item"]} to="/services">
                                <i className="wrench icon" />
                                    <span className={style["slider-item--text"]}>Service</span>
                                </NewLink>
                            </li>
                    </SliderDropDownItem>
                    <SliderDropDownItem name="Blog" activeTab={history.location.pathname === "/posts" || history.location.pathname === "/comments"} sideDrawerActive={sideDrawerActive} iconClass="blogger icon">
                            <li onClick={itemClick}>
                                <NewLink className={style["slider-item"]} to="/posts">
                                    <i className="edit icon" />
                                    <span className={style["slider-item--text"]}>Posts</span>
                                </NewLink>
                            </li>
                            <li onClick={itemClick}>
                                <NewLink className={style["slider-item"]} to="/comments">
                                <i className="comment icon" />
                                    <span className={style["slider-item--text"]}>Comments</span>
                                </NewLink>
                            </li>
                    </SliderDropDownItem>
                    <li>
                        <NewLink className={`${style["slider-item"]} ${history.location.pathname === "/coupons" && style["active-item"]}`} to="/coupons">
                            <i className="gift icon" />
                            <span className={style["slider-item--text"]}>Coupons</span>
                        </NewLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

