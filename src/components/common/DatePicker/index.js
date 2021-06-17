import style from '../../../style/datepicker.module.scss';
import { useState } from 'react'
import DatePickerDropDown from './Dropdown';
const DatePicker = () => {
    const date = new Date()
    const [selectedDate, setSelectedDate] = useState({day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()})
    const [dropdownActive, setDropDownActive] = useState(false)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <div className={style['date-picker-input']}>
            <div className={style['selected-date']}>
                <div className={style['selected-date-text']}>{`${selectedDate.day} / ${selectedDate.month} / ${selectedDate.year}`}</div>
                <i className="calendar alternate icon" />
            </div>
            <DatePickerDropDown selectedYear={selectedDate.year} selectedMonth={months[selectedDate.month - 1]}/>
        </div>
    )
}

export default DatePicker