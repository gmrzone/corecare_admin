import style from "../../style/main-layout.module.scss";
const CreateAction = ({ forPage }) => {
    return (
        <div className={style['action Container']}>
            <button class="ui secondary button">
                Create {forPage}
            </button>
        </div>
    )
}

export default CreateAction