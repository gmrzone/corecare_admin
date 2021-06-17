import style from '../../../style/datepicker.module.scss';
import { useState } from 'react'
import DatePickerDropDown from './Dropdown';
const DatePicker = () => {
    const date = new Date()
    const [selectedDate, setSelectedDate] = useState({day: date.getDate(), month: date.getMonth(), year: date.getFullYear()})
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekdays = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    const getavailableYears = () => {
        const startyear = 2019
        const currentYear = new Date().getFullYear()
        const years = []
        for (let i=startyear; i <= currentYear; i++){
            years.push(i)
        }
        return years
    }
    const getPreviousMonth = () => {
        setSelectedDate(s => {
            if (selectedDate.month === 0){
                return {...s, month: 11, year: selectedDate.year - 1}
            }
            else{
                return {...s, month: selectedDate.month - 1}
            }
        })
    }
    const getNextMonth = () => {
        setSelectedDate(s => {
            if (selectedDate.month === 11){
                return {...s, month: 0, year: selectedDate.year + 1}
            }
            else{
                return {...s, month: selectedDate.month + 1}
            }
        })
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
                <div className={style['selected-date-text']}>{`${selectedDate.day} / ${selectedDate.month} / ${selectedDate.year}`}</div>
                <i className="calendar alternate icon" />
            </div>
            <DatePickerDropDown selectedYear={selectedDate.year} selectedMonth={months[selectedDate.month]} selectedDay={selectedDate.day} days={getAvailableDays(selectedDate.year, selectedDate.month)} getPreviousMonth={getPreviousMonth} getNextMonth={getNextMonth}/>
        </div>
    )
}

export default DatePicker