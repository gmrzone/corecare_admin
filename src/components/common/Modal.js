import reactDom from "react-dom";
import style from "../../style/modal.module.scss";
import { useRef, useEffect } from 'react'
const Modal = ({ isForm=true , header, children, active, closeModal, submitForm, handleSubmit, handleNoFormClick }) => {
    const backdrop = useRef()
    const makeModalVisible = () => {
        backdrop.current.classList.add(style.visible)
    }
    const stopClose = (e) => {
        e.stopPropagation()
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
        <div className={`${style["backdrop"]}`} ref={backdrop} onClick={closeModal}>
            <div className={`${style.modal}`} onClick={stopClose}>
                <div className={style["header"]}>
                    <div className={style["header-text"]}>{header}</div>
                    <i className={`close icon ${style["close-icon"]}`} onClick={closeModal}/>
                </div>
                {isForm ? (<form className={`ui form ${window.innerWidth > 768 && "large"}`} onSubmit={handleSubmit(submitForm)}>
                    <div className={style["body"]}>
                        {children}
                    </div>
                    <div className={style.action}>
                        <button className={`ui secondary button`} type="submit">{header?.split(" ")[0] === "Are" ? "Delete" : header?.split(" ")[0] === "Create" ? "Create" : "Update" }</button>
                        <button className={`ui secondary button`} onClick={closeModal} type="button">Cancel</button>
                    </div>
                </form>) : (
                    <>
                        {children}
                        <div className={style.action}>
                            <button className={`ui secondary button`} type="button" onClick={handleNoFormClick}>{header?.split(" ")[0] === "Are" ? "Delete" : header?.split(" ")[0] === "Create" ? "Create" : "Update" }</button>
                            <button className={`ui secondary button`} onClick={closeModal} type="button">Cancel</button>
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.querySelector("#main-modal"),
    );
};

export default Modal;
