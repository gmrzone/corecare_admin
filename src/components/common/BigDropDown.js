import style from "../../style/main-layout.module.scss";
import { useState, useEffect, useRef } from "react";
const BigDropDown = ({ iconClass, type, data }) => {
    const [dropDownActive, setDropDownActive] = useState(false);
    const backDrop = useRef();
    useEffect(() => {
        const deactivateDropDown = () => {
            if (dropDownActive && window.innerWidth > 768) {
                setDropDownActive(false);
            }
        };
        document.body.addEventListener("click", deactivateDropDown);
        return () => {
            document.body.removeEventListener("click", deactivateDropDown);
        };
    }, [dropDownActive]);

    const renderNotification = () => {
        let notifications;
        if (type === "Notification") {
            notifications = data.map((x) => {
                return (
                    <div key={x.id} className={style["notification-item"]}>
                        <img src="./default-profile.png" alt="small_profile_pic" width={40} />
                        <p className={style["notification-item-text"]}>
                            <span>{x.from}</span> {x.msg} <span>{x.to ? x.to : ""}</span>
                            &nbsp;<span className={style["notification-created"]}>{x.created}</span>
                        </p>
                    </div>
                );
            });
            return notifications;
        }
        return null;
    };
    const toggleDropDown = () => {
        const deactivateBackdrop = () => backDrop.current.classList.remove(style["make-block"]);
        const activateBackBrop = () => backDrop.current.classList.add(style["make-visible"]);
        console.log("before", dropDownActive);
        setDropDownActive((s) => !s);
        console.log("after", dropDownActive);
        if (window.innerWidth < 768) {
            if (dropDownActive) {
                backDrop.current.classList.remove(style["make-visible"]);
                setTimeout(deactivateBackdrop, 300);
            } else {
                backDrop.current.classList.add(style["make-block"]);
                setTimeout(activateBackBrop, 20);
            }
        }
    };
    const renderMessages = () => {
        let messages;
        if (type === "Messages") {
            messages = data.map((x) => {
                return (
                    <div key={x.id} className={style["message-item"]}>
                        <img src="./default-profile.png" alt="small_profile_pic" width={40} />
                        <span className={style["message-created"]}>{x.created}</span>
                        <div className={style["message-item-text"]}>
                            <div className={style["sender-name"]}>{x.name}</div>
                            <div className={style["sender-message"]}>{x.msg.substring(0, 70) + "...."}</div>
                        </div>
                    </div>
                );
            });
            return messages;
        }
        return null;
    };
    return (
        <div className={style["nav-right-item"]}>
            <div className={style["nav-right-item__icon"]} onClick={toggleDropDown}>
                <div className={style["notification-count"]}>{data.length}</div>
                <i className={iconClass} />
            </div>
            <div className={style["nav-right-item__backdrop"]} ref={backDrop} onClick={toggleDropDown}></div>
            <div className={`${style["nav-right-dropdown"]} ${dropDownActive && style["nav-right-dd__active"]}`}>
                <div className={style["dropdown-close-mobile"]} onClick={toggleDropDown}>
                    <i className="close icon" />
                    <span>{type}</span>
                </div>
                <div className={style["dropdown-header-desktop"]}>
                    <span>{type}</span>
                </div>
                <div className={style["dropdown-body"]}>{renderNotification() || renderMessages()}</div>
                <div className={style["dropdown-footer-desktop"]}>
                    <span>View All</span>
                </div>
            </div>
        </div>
    );
};

export default BigDropDown;
