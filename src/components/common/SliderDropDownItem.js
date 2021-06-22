import style from "../../style/main-layout.module.scss";
import { useState } from "react";
const SliderDropDownItem = ({ children, name, activeTab, sideDrawerActive, iconClass }) => {
    const [dropDownActive, setDropDownActive] = useState(false);
    const toggleActive = (e) => {
        e.stopPropagation();
        setDropDownActive((s) => !s);
    };

    return (
        <div className={style["slider-dropdown"]} onClick={toggleActive}>
            <span className={`${style["slider-item"]} ${style["dropdown-slider-item"]} ${activeTab && style["active-item"]}`}>
                <div className={style["slider-item-title"]}>
                    <i className={iconClass} />
                    <span className={style["slider-item--text"]}>{name}</span>
                </div>
                <i className={`angle ${dropDownActive ? "up" : "down"} icon ${style["dropdown-icon"]}`} />
            </span>
            <div
                className={`${style["slider-dropdown-list"]} ${dropDownActive && style["slider-dropdown-list__active"]} ${
                    sideDrawerActive && style["slider-dropdown-margin"]
                }`}>
                {children}
            </div>
        </div>
    );
};

export default SliderDropDownItem;
