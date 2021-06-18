import style from '../../../style/datePicker/datepicker.module.scss';
import { useState, useEffect } from 'react'
import DatePickerDropDown from './Dropdown';
import { getAvailableDays } from './utils'
const DatePicker = () => {
    const date = new Date()
    const [selectedDate, setSelectedDate] = useState({day: date.getDate(), month: date.getMonth(), year: date.getFullYear()})
    const [dropDownActive, setDropDownActive] = useState(false)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    useEffect(() => {
        const disableDropDown = () => {
            if (dropDownActive){
                setDropDownActive(false)
            }
        }
        document.body.addEventListener('click', disableDropDown)
        return () => {
            document.body.removeEventListener('click', disableDropDown)
        }
    }, [dropDownActive])
    const getPreviousMonth = () => {
        setSelectedDate(s => {
            if (selectedDate.month === 0){
                return {day: null, month: 11, year: selectedDate.year - 1}
            }
            else{
                return {...s, month: selectedDate.month - 1, day: null}
            }
        })
    }
    const getNextMonth = () => {
        setSelectedDate(s => {
            if (selectedDate.month === 11){
                return {day: null, month: 0, year: selectedDate.year + 1}
            }
            else{
                return {...s, month: selectedDate.month + 1, day: null}
            }
        })
    }
    const selectDate = (day, month, year, close) => {
       
        setSelectedDate({day, month, year})
        if (close){
            setDropDownActive(false)
        }
    }

    const toggleDropdown = () => {
        setDropDownActive(s => !s)
    }
    const closeDropDown = () => {
        setDropDownActive(false)
    }
    return (
        <div className={style['date-picker-input']}>
            <div className={style['selected-date']} onClick={toggleDropdown}>
                <div className={style['selected-date-text']}>{`${months[selectedDate.month] || "--"} ${selectedDate.day || "--"}, ${selectedDate.year || "--"}`}</div>
                <i className="calendar alternate icon" />
            </div>
            <DatePickerDropDown active={dropDownActive} closeDropDown={closeDropDown} selectedYear={selectedDate.year} selectedMonth={selectedDate.month} selectedDay={selectedDate.day} days={getAvailableDays(selectedDate.year, selectedDate.month)} getPreviousMonth={getPreviousMonth} getNextMonth={getNextMonth} selectDate={selectDate} months={months}/>
        </div>
    )
}

export default DatePicker