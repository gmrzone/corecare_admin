import style from '../../../style/datePicker/daterange.module.scss'
import { useState, useEffect } from 'react'
import DropDown from './DropDown'
const DateRangeFilter = () => {
    const endDate = new Date()
    const startDate = new Date(2019, 8, 1)
    const [fromDate, setFromDate] = useState({day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear()})
    const [toDate, setToDate] = useState({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    const [dropDownActive, setDropDownActive] = useState(false)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
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
    const SelectAllData = () => {
        setFromDate({day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear()})
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
    }
    const selectThisMonthData = () => {
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()}) 
        setFromDate(s => {
            return {...s, day: 1, month: endDate.getMonth(), year: endDate.getFullYear()}
        })
        setDropDownActive(false)
        
    }
    const selectPreviousMonthData =() => {
        const newEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), 0)
        const newStartDate = new Date(new Date(newEndDate).setDate(1))
        setToDate({day: newEndDate.getDate(), month: newEndDate.getMonth(), year: newEndDate.getFullYear()})
        setFromDate({day: newStartDate.getDate(), month: newStartDate.getMonth(), year: newStartDate.getFullYear()})
        setDropDownActive(false)

    }
    const selectThisYearData = () => {
        setFromDate({day: 1, month: 0, year: endDate.getFullYear()})
        setToDate({day: endDate.getDate(), month: endDate.getMonth(), year: endDate.getFullYear()})
        setDropDownActive(false)
    }
    const selectSevenDaysData = () => {
        const newEndDate = new Date(endDate)
        const newStartDate = new Date(new Date(newEndDate).setDate(endDate.getDate() - 6))
        setFromDate({day: newStartDate.getDate(), month: newStartDate.getMonth(), year: newStartDate.getFullYear()})
        setToDate({day: newEndDate.getDate(), month: newEndDate.getMonth(), year: newEndDate.getFullYear()})
        setDropDownActive(false)
    }
    const getPreviousMonth  = (setState) => {
        
        setState(s => {
            if (s.month === 0){
                return {...s, day: null, month: 11, year: s.year - 1}
            }
            else{
                return {...s, day: null, month: s.month - 1}
            }
        })
    }
    const getNextMonth = (setState) => {
        setState(s => {
            if (s.month === 11){
                return {...s, day: null, month: 0, year: s.year + 1}
            }
            else{
                return {...s, day: null, month: s.month + 1}
            }
        })
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
    const toggleDropDown = () => {
        setDropDownActive(s => !s)
    }
    const closeDropDown = () => {
        setDropDownActive(false)
    }
    return (
        <div className={style['date-range-input']}>
            <div className={style['selected-range']} onClick={toggleDropDown}>
                <i className="calendar alternate icon" />
                <div className={style['selected-range-text']}>{months[fromDate.month] || "--"} {fromDate.day || "--"}, {fromDate.year || "--"} - {months[toDate.month] || "--"} {toDate.day || "--"}, {toDate.year || "--"}</div>
                <i className={`angle ${dropDownActive ? "up" : "down"} icon`} />
            </div>
            <DropDown active={dropDownActive} options={dropDownOptions} months={months} selectedFromDate={fromDate} selectedToDate={toDate} setFromDate={setFromDate} setToDate={setToDate} getPreviousMonth={getPreviousMonth} getNextMonth={getNextMonth} closeDropDown={closeDropDown}/>
        </div>
    )
}

export default DateRangeFilter