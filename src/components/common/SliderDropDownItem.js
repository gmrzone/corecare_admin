import style from "../../style/main-layout.module.scss";
import { useState } from 'react'
const SliderDropDownItem = ({ children, name, activeTab, sideDrawerActive }) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    const toggleActive = (e) => {
        e.stopPropagation()
        setDropDownActive(s => !s)
    }
    return (
    <div className={style['slider-dropdown']} onClick={toggleActive}>
        <span className={`${style["slider-item"]} ${activeTab && style["active-item"]}`}>
            <i className="blogger icon" />
            <span className={style["slider-item--text"]}>{name}</span>
            <i className={`angle ${dropDownActive ? "up" : "down"} icon ${style["dropdown-icon"]}`} />
        </span>
        <div className={`${style['slider-dropdown-list']} ${dropDownActive && style['slider-dropdown-list__active']} ${sideDrawerActive && style['slider-dropdown-margin']}`}>
            {children}
        </div>
    </div>
    )
}

export default SliderDropDownItem