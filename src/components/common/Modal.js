import reactDom from "react-dom";
import style from "../../style/modal.module.scss";
const Modal = ({ header, children }) => {
    return reactDom.createPortal(
        <div className={`${style["backdrop"]} ${style.active}`}>
            <div className={`${style.modal} ${style.active}`}>
                <div className={style["header"]}>
                    <div className={style["header-text"]}>{header}</div>
                    <i className={`close icon ${style["close-icon"]}`} />
                </div>
                <div className={style["body"]}>{children}</div>
                <div className={style.action}>
                    <button className={`ui secondary button`}>Okay</button>
                    <button className={`ui secondary button`}>Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector("#main-modal"),
    );
};

export default Modal;
