import style from "../../style/main-layout.module.scss";
const CreateAction = ({ forPage }) => {
    return (
        <div className={style['action-Container']}>
            <button class="ui secondary button">
                Create {forPage}
            </button>
            <button class="ui secondary button">
                Export as CSV
            </button>
        </div>
    )
}

export default CreateAction