import style from '../../../style/datepicker.module.scss';
import { useState } from 'react'
import DatePickerDropDown from './Dropdown';
const DatePicker = () => {
    const date = new Date()
    const [selectedDate, setSelectedDate] = useState({day: date.getDate(), month: date.getMonth(), year: date.getFullYear()})
    const weekdays = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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
    const selectDate = (day, month, year) => {
       
        setSelectedDate({day, month, year})
    }
    const getAvailableDays = (year, month) => {
        let date = new Date(year, month, 1)
        const days = new Array(42)
        let count = 1
        let weekdayNum = date.getDay()
        while (date.getMonth() === month){
            days[weekdayNum] = count
            // const weekday = weekdays[date.getDay()]
            date.setDate(date.getDate() + 1)
            count += 1
            weekdayNum += 1
        }
        return days
    }
    return (
        <div className={style['date-picker-input']}>
            <div className={style['selected-date']}>
                <div className={style['selected-date-text']}>{`${selectedDate.day || "--"} / ${selectedDate.month + 1 || "--"} / ${selectedDate.year || "--"}`}</div>
                <i className="calendar alternate icon" />
            </div>
            <DatePickerDropDown selectedYear={selectedDate.year} selectedMonth={selectedDate.month} selectedDay={selectedDate.day} days={getAvailableDays(selectedDate.year, selectedDate.month)} getPreviousMonth={getPreviousMonth} getNextMonth={getNextMonth} selectDate={selectDate}/>
        </div>
    )
}

export default DatePicker