import style from '../../../style/datePicker/daterange-dropdown.module.scss'
import { useState } from 'react'
import { getAvailableDays, getavailableYears } from '../DatePicker/utils'
const DropDown = ({active, options, months, selectedFromDate, selectedToDate, setFromDate, setToDate, getPreviousMonth, getNextMonth, closeDropDown }) => {
    const [customRange, setCustomRange] = useState({status: false, fromDateActive: false, toDateActive: false})
    const [selectMonthYear, setSelectMonthYear] = useState({fromDate: {status: false, yearSelected: false}, toDate: {status: false, yearSelected: false}})

    const getRangeCalender = () => {
        setCustomRange(s => {
            return {...s, status: true, fromDateActive: true}
        })
    }
    let noActive = true;
    const renderOptions = options.map((x, i) => {
        if (x.active){
            noActive = false
        }
        return (
            <span key={i} className={`${style['dropdown-item']} ${x.active && style['active-item']} ${i === 5 && noActive && style['active-item']}`} onClick={x.action ? x.action : getRangeCalender}>
                {x.name}
            </span>
        )
    })
    const activateFromCalender = () => {
        // setSelectMonthYear(s => {
        //     return {fromDate: {...s.fromDate}, toDate: {status: false, yearSelected: false}}
        // })
        setCustomRange({status :true, fromDateActive: true, toDateActive: false})
    }
    const activateToCalender = () => {
        // setSelectMonthYear(s => {
        //     return {fromDate: {status: false, yearSelected: false}, toDate: {...s.toDate}}
        // })
        setCustomRange({status: true, fromDateActive: false, toDateActive: true})
    }
    const selectDate = (day, month, year) => {
        if (customRange.fromDateActive){
            setFromDate(s => {
                return {...s, day: day ?? selectedFromDate.day, month: month ?? selectedFromDate.month, year: year ?? selectedFromDate.year}
            })
        }
        else{
            setToDate(s => {
                return {...s, day: day ?? selectedToDate.day, month: month ?? selectedToDate.month, year: year ?? selectedToDate.year}
            })
        }
    }
    const selectYear = (year) => {
        selectDate(null, null, year)
        if (customRange.fromDateActive){
            setSelectMonthYear(s => {
                return {fromDate: {...s.fromDate, yearSelected: true}, toDate: {...s.toDate}}
            })
        }
        else{
            setSelectMonthYear(s => {
                return {toDate: {...s.toDate, yearSelected: true}, fromDate: {...s.fromDate}}
            })
        }
    }
    const selectMonth = (month) => {
        selectDate(null, month, null)
        if (customRange.fromDateActive){
            setSelectMonthYear(s => {
                return {fromDate: {status: false, yearSelected: false}, toDate: {status: false, yearSelected: false}}
            })
        }
        else{
            setSelectMonthYear(s => {
                return {toDate: {status: false, yearSelected: false}, fromDate: {status: false, yearSelected: false}}
            })
        }
    }
    const renderYears = getavailableYears(2019).map((x) => {
        return (
            <span key={x} className={style['range-dropdown-main-item']} onClick={() => selectYear(x)}>
                {x}
            </span>
        )
    })
    const renderMonths = months.map((x, i) => {
        return (
            <span key={x + i} className={style['range-dropdown-main-item']} onClick={() => selectMonth(i)}>
                {x}
            </span>
            )
    })
    const renderFromAvailableDays = (date) => {
        const ad = []
        let c = 0
        for (let i of getAvailableDays(date.year, date.month)){
            if (i === undefined){
                ad.push(<span key={c}></span>)
            }
            else if (i === date.day){
                ad.push(<span key={c} className={`${style['range-dropdown-main-item']} ${style['active-day']}`}>{i}</span>)
            }
            else{
                ad.push(<span key={c} className={style['range-dropdown-main-item']} onClick={() => selectDate(i, )}>{i}</span>)
            }
            c++
        }
        return ad
    }
    const getDaysCount = ({day: fromDay, month: fromMonth, year: fromYear}, {day: toDay, month: toMonth, year: toYear}) => {
        const fromDate = new Date(fromYear, fromMonth, fromDay)
        const toDate = new Date(toYear, toMonth, toDay)
        const milliSecondPerDay = 24 * 60 * 60 * 1000
        fromDate.setMinutes(fromDate.getMinutes() - fromDate.getTimezoneOffset());
        toDate.setMinutes(toDate.getMinutes() - toDate.getTimezoneOffset());
        return (toDate - fromDate) / milliSecondPerDay + 1
        
    }
    const applyCustomRange = () => {
        setCustomRange({status: false, fromDateActive: false, toDateActive: false})
        closeDropDown()
    }
    const activateSelectYearMonth = () => {

        if (customRange.fromDateActive){
            setSelectMonthYear(s => {
                return {fromDate: {...s.fromDate, status: true}, toDate: {...s.toDate}}
            })
        }
        else{
            setSelectMonthYear(s => {
                return {toDate: {...s.toDateDate, status: true}, fromDate: {...s.fromDate}}
            })
        }
    }
    console.log("afzal", selectMonthYear)
    return (
        <div className={`${style['range-dropdown']} ${active && style['dropdown-active']}`} onClick={(e) => e.stopPropagation()}>
            {customRange.status && (
                <div className={style['days-count']}>{getDaysCount(selectedFromDate, selectedToDate)} Days</div>
            )}
            {customRange.status && (
                <div className={style['range-dropdown-toggle']}>
                    <div className={`${style['toggle-item']} ${customRange.fromDateActive && style['active-item']}`} onClick={activateFromCalender}>{months[selectedFromDate.month] || "---"} {selectedFromDate.day || "--"}, {selectedFromDate.year || "----"}</div>
                    <span>To</span>
                    <div className={`${style['toggle-item']} ${customRange.toDateActive && style['active-item']}`} onClick={activateToCalender}>{months[selectedToDate.month] || "---"} {selectedToDate.day || "--"}, {selectedToDate.year || "----"}</div>
                </div>
            )}
            {customRange.status && customRange.fromDateActive ? (
                        <div className={style['selected-year']}>
                            <i className="angle left icon" onClick={() => getPreviousMonth(setFromDate)}/>
                                <span onClick={activateSelectYearMonth}>{months[selectedFromDate.month].toUpperCase()} {selectedFromDate.year}</span>
                            <i className="angle right icon" onClick={() => getNextMonth(setFromDate)}/>
                        </div>
                    ) : customRange.status && customRange.toDateActive ? (
                        <div className={style['selected-year']}>
                            <i className="angle left icon" onClick={() => getPreviousMonth(setToDate)}/>
                                <span onClick={activateSelectYearMonth}>{months[selectedToDate.month].toUpperCase()} {selectedToDate.year}</span>
                            <i className="angle right icon" onClick={() => getNextMonth(setToDate)}/>
                        </div>
            ) : ""}

            {customRange.status && (
                <div className={`${style['range-dropdown-main']} ${(selectMonthYear.fromDate.status || selectMonthYear.toDate.status) && style['range-dropdown-alternate']}`}>
                    {!selectMonthYear.fromDate.status && !selectMonthYear.toDate.status && (
                        <>
                            <span>S</span>
                            <span>M</span>
                            <span>T</span>
                            <span>W</span>
                            <span>T</span>
                            <span>F</span>
                            <span>S</span>
                        </>
                    )}
                    
                    {(customRange.fromDateActive && !selectMonthYear.fromDate.status ) && renderFromAvailableDays(selectedFromDate)}
                    {customRange.toDateActive && !selectMonthYear.toDate.status && renderFromAvailableDays(selectedToDate)}

                    {selectMonthYear.fromDate.status && selectMonthYear.fromDate.yearSelected && customRange.fromDateActive && renderMonths}
                    {selectMonthYear.fromDate.status && !selectMonthYear.fromDate.yearSelected && customRange.fromDateActive && renderYears}

                    {selectMonthYear.toDate.status && selectMonthYear.toDate.yearSelected && customRange.toDateActive && renderMonths}
                    {selectMonthYear.toDate.status && !selectMonthYear.toDate.yearSelected && customRange.toDateActive && renderYears}
                </div>
            )}
            {customRange.status && !selectMonthYear.fromDate.status && !selectMonthYear.toDate.status  && (
                <button className={`ui secondary mini button ${style['apply-button']}`} onClick={applyCustomRange}>
                    Apply
                </button>
            )}
            {!customRange.status && renderOptions}
        </div>
    )
}

export default DropDown