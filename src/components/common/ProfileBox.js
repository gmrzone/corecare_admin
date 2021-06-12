import style from "../../style/main-layout.module.scss";
import { useState, useEffect } from "react";
const ProfileBox = () => {
    const [dropDownActive, setDropDownActive] = useState(false);
    const toggleDropDown = () => {
        setDropDownActive((s) => !s);
    };
    useEffect(() => {
        const deactivateDropDown = () => {
            if (dropDownActive) {
                setDropDownActive(false);
            }
        };
        document.body.addEventListener("click", deactivateDropDown);

        return () => {
            document.body.removeEventListener("click", deactivateDropDown);
        };
    }, [dropDownActive]);
    return (
        <div className={`${style["nav-right-item"]} ${style["profile-box"]}`} onClick={toggleDropDown}>
            <div className={style["profile-box-container"]}>
                <div className={style["opener-icon"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={style["profile-image"]}>
                    <img src="/default-profile.png" alt="default-pic" width={30} />
                </div>
            </div>
            <div className={`${style["profile-box-dropdown"]} ${dropDownActive && style["profilebox-active"]}`}>
                <ul className={style["profile-box-dropdown-list"]}>
                    <li className={style["profile-box-dropdown-item"]}>Profile</li>
                    <li className={style["profile-box-dropdown-item"]}>Settings</li>
                    <li className={style["profile-box-dropdown-item"]}>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileBox;
