import style from '../../../style/datePicker/daterange-dropdown.module.scss'
import { useState } from 'react'
import { getAvailableDays } from '../DatePicker/utils'
const DropDown = ({active, options, months, selectedFromDate, selectedToDate }) => {
    const [customRange, setCustomRange] = useState({status: false, fromDateActive: false, toDateActive: false})
    const getRangeCalender = () => {
        setCustomRange(s => {
            return {...s, status: true, fromDateActive: true}
        })
    }
    const renderOptions = options.map((x, i) => {
        return (
            <span key={i} className={`${style['dropdown-item']} ${x.active && style['active-item']}`} onClick={x.action ? x.action : getRangeCalender}>
                {x.name}
            </span>
        )
    })
    const activateFromCalender = () => {
        setCustomRange(s => {
            return {...s, fromDateActive: true, toDateActive: false}
        })
    }
    const activateToCalender = () => {
        setCustomRange(s => {
            return {...s, fromDateActive: false, toDateActive: true}
        })
    }
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
                ad.push(<span key={c} className={style['range-dropdown-main-item']}>{i}</span>)
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
    return (
        <div className={`${style['range-dropdown']} ${active && style['dropdown-active']}`} onClick={(e) => e.stopPropagation()}>
            {customRange.status && (
                <div className={style['days-count']}>{getDaysCount(selectedFromDate, selectedToDate)} Days</div>
            )}
            {customRange.status && (
                <div className={style['range-dropdown-toggle']}>
                    <div className={`${style['toggle-item']} ${customRange.fromDateActive && style['active-item']}`} onClick={activateFromCalender}>{months[selectedFromDate.month]} {selectedFromDate.day}, {selectedFromDate.year}</div>
                    <span>To</span>
                    <div className={`${style['toggle-item']} ${customRange.toDateActive && style['active-item']}`} onClick={activateToCalender}>{months[selectedToDate.month]} {selectedToDate.day}, {selectedToDate.year}</div>
                </div>
            )}
            {customRange.status && customRange.fromDateActive ? (
                        <div className={style['selected-year']}>
                            <i className="angle left icon" />
                                <span>{months[selectedFromDate.month].toUpperCase()} {selectedFromDate.year}</span>
                            <i className="angle right icon" />
                        </div>
                    ) : customRange.status && customRange.toDateActive ? (
                        <div className={style['selected-year']}>
                            <i className="angle left icon" />
                                <span>{months[selectedToDate.month].toUpperCase()} {selectedToDate.year}</span>
                            <i className="angle right icon" />
                        </div>
            ) : ""}

            {customRange.status && (
                <div className={style['range-dropdown-main']}>
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>

                    {customRange.fromDateActive && renderFromAvailableDays(selectedFromDate)}
                    {customRange.toDateActive && renderFromAvailableDays(selectedToDate)}
                </div>
            )}
            {!customRange.status && renderOptions}
        </div>
    )
}

export default DropDown