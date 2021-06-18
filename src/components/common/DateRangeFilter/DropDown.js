import style from '../../../style/datePicker/daterange-dropdown.module.scss'
const DropDown = ({active, options }) => {
    const getRangeCalender = () => {
        console.log("Custom Range")
    }
    const renderOptions = options.map((x, i) => {
        return (
            <span key={i} className={`${style['dropdown-item']} ${x.active && style['active-item']}`} onClick={x.action ? x.action : getRangeCalender}>
                {x.name}
            </span>
        )
    })
    return (
        <div className={`${style['range-dropdown']} ${active && style['dropdown-active']}`}>
                {renderOptions}
        </div>
    )
}

export default DropDown