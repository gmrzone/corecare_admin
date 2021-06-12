import style from '../../style/main-layout.module.scss';
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    const [sideBarActive, setSideBarActive] = useState(false);
    return (
        <div className={style.sidebar}>
            <div className={`${style['sidebar-opener']} ${sideBarActive && style.active}`} onClick={() => setSideBarActive(a => !a)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={style.slider}>
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