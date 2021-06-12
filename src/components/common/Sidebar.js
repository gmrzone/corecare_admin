import style from '../../style/main-layout.module.scss';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { SideDrawerContext } from '../../context/SideDrawerContext'
const Sidebar = () => {
    const { sideDrawerActive, toggleSideDrawer } = useContext(SideDrawerContext)
    return (
        <div className={style.sidebar}>
            <div className={`${style['sidebar-opener']} ${sideDrawerActive && style.active}`} onClick={toggleSideDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${style.slider} ${sideDrawerActive && style['slider-active']}`}>
                <ul className={style['slider-items-list']}>
                    <li>
                        <Link className={`${style['slider-item']} ${style['active-item']}`} to="/">
                            <i class="home icon" />
                            <span>DashBoard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style['slider-item']}>
                            <i class="briefcase icon" />
                            <span>Employees</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style['slider-item']}>
                            <i class="users icon" />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style['slider-item']}>
                            <i class="phone icon" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style['slider-item']}>
                            <i class="dashcube icon" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style['slider-item']}>
                            <i class="blogger icon" />
                            <span>Blog</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar