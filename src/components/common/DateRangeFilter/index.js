import style from '../../../style/datePicker/daterange.module.scss'
import { useState } from 'react'
import DropDown from './DropDown'
import { getAvailableDays } from '../DatePicker/utils'
const DateRangeFilter = () => {
    const endDate = new Date()
    const startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate())
    const [fromDate, setFromDate] = useState({day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear()})
    const [toDate, setToDate] = useState({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    const [dropDownActive, setDropDownActive] = useState(true)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className={style['date-range-input']}>
            <div className={style['selected-range']}>
                <i className="calendar alternate icon" />
                <div className={style['selected-range-text']}>{months[fromDate.month] || "--"} {fromDate.day || "--"}, {fromDate.year || "--"} - {months[toDate.month] || "--"} {toDate.day || "--"}, {toDate.year || "--"}</div>
            </div>
            <DropDown />
        </div>
    )
}

export default DateRangeFilter