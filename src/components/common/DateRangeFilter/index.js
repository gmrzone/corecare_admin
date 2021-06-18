import style from '../../../style/datePicker/daterange.module.scss'
import { useState } from 'react'
import DropDown from './DropDown'
import { getAvailableDays } from '../DatePicker/utils'
const DateRangeFilter = () => {
    const endDate = new Date()
    const startDate = new Date(2019, 8, 1)
    const [fromDate, setFromDate] = useState({day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear()})
    const [toDate, setToDate] = useState({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    const [dropDownActive, setDropDownActive] = useState(true)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const SelectAllData = () => {
        setFromDate({day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear()})
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    }
    const selectThisMonthData = () => {
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()}) 
        setFromDate(s => {
            return {...s, day: 1, month: endDate.getMonth(), year: endDate.getFullYear()}
        })
        
    }
    const selectPreviousMonthData =() => {
        const newEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), 0)
        const newStartDate = new Date(new Date(newEndDate).setDate(1))
        setToDate({day: newEndDate.getDate(), month: newEndDate.getMonth(), year: newEndDate.getFullYear()})
        setFromDate({day: newStartDate.getDate(), month: newStartDate.getMonth(), year: newStartDate.getFullYear()})

    }
    const selectThisYearData = () => {
        setFromDate({day: 1, month: 0, year: endDate.getFullYear()})
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    }
    const selectSevenDaysData = () => {
        const newEndDate = new Date(endDate)
        const newStartDate = new Date(new Date(newEndDate).setDate(endDate.getDate() - 6))
        setFromDate({day: newStartDate.getDate(), month: newStartDate.getMonth(), year: newStartDate.getFullYear()})
        setToDate({day: newEndDate.getDate(), month: newEndDate.getMonth(), year: newEndDate.getFullYear()})
    }
    const dropDownOptions = [
        {
            name: "All",
            action: SelectAllData,
            active: fromDate.day === startDate.getDate() && fromDate.month === startDate.getMonth() && fromDate.year === startDate.getFullYear() && toDate.day === endDate.getDate() && toDate.month === endDate.getMonth() && toDate.year === endDate.getFullYear()

        },
        {
            name: "Last 7 Days",
            action: selectSevenDaysData,
            active: ""
        },
        {
            name: "This Month",
            action: selectThisMonthData,
            active: ""
        },
        {
            name: "Previous Month",
            action: selectPreviousMonthData,
            active: ""
        },
        {
            name: "This Year",
            action: selectThisYearData,
            active: ""
        },
        {
            name: "Custom Range"
        }

    ]

    return (
        <div className={style['date-range-input']}>
            <div className={style['selected-range']}>
                <i className="calendar alternate icon" />
                <div className={style['selected-range-text']}>{months[fromDate.month] || "--"} {fromDate.day || "--"}, {fromDate.year || "--"} - {months[toDate.month] || "--"} {toDate.day || "--"}, {toDate.year || "--"}</div>
                <i className={`angle ${dropDownActive ? "up" : "down"} icon`} />
            </div>
            <DropDown active={setDropDownActive} options={dropDownOptions} />
        </div>
    )
}

export default DateRangeFilter