import reactDom from "react-dom";
import style from "../../style/modal.module.scss";
import { useRef, useEffect } from 'react'
const Modal = ({ header, children, active, closeModal, submitForm, handleSubmit }) => {
    const backdrop = useRef()
    const makeModalVisible = () => {
        backdrop.current.classList.add(style.visible)
    }
    const hideModal = () => {
        backdrop.current.classList.remove(style.active)
    }
    useEffect(() => {
        if (active){
            backdrop.current.classList.add(style.active)
            setTimeout(makeModalVisible, 25)
        }
        else{
            backdrop.current.classList.remove(style.visible)
            setTimeout(hideModal, 300)
        }
    }, [active])
    return reactDom.createPortal(
        <div className={`${style["backdrop"]}`} ref={backdrop}>
            <div className={`${style.modal}`}>
                <div className={style["header"]}>
                    <div className={style["header-text"]}>{header}</div>
                    <i className={`close icon ${style["close-icon"]}`} onClick={closeModal}/>
                </div>
                <form className={`ui form ${window.innerWidth > 768 && "large"}`} onSubmit={handleSubmit(submitForm)}>
                    <div className={style["body"]}>
                        {children}
                    </div>
                    <div className={style.action}>
                        <button className={`ui secondary button`} type="submit">{header === "Create Employee" ? "Create" : "Update" }</button>
                        <button className={`ui secondary button`} onClick={closeModal} type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>,
        document.querySelector("#main-modal"),
    );
};

export default Modal;
