import style from "../../../style/datePicker/datepicker-dropdown.module.scss";
import { useState } from "react";
import { getavailableYears } from "./utils";
const DatePickerDropDown = ({
    active,
    selectedYear,
    selectedMonth,
    selectedDay,
    days,
    getPreviousMonth,
    getNextMonth,
    selectDate,
    months,
}) => {
    const [selectMonthYear, setSelectMonthyear] = useState({ status: false, yearSelected: false });
    const renderDays = () => {
        const render = [];
        let c = 0;
        for (let i of days) {
            if (i === undefined) {
                render.push(<span key={c}></span>);
            } else if (i === selectedDay) {
                render.push(
                    <span className={`${style["dropdown-item"]} ${style["active-item"]}`} key={c}>
                        {i}
                    </span>,
                );
            } else {
                render.push(
                    <span className={style["dropdown-item"]} key={c} onClick={() => selectDate(i, selectedMonth, selectedYear, true)}>
                        {i}
                    </span>,
                );
            }
            c++;
        }
        return render;
    };
    const getMonthOptionsAndSelectYear = (selectedYearNew) => {
        selectDate(selectedDay, selectedMonth, selectedYearNew);
        setSelectMonthyear((s) => {
            return { ...s, yearSelected: true };
        });
    };
    const getDaysOptionAndSelectMonth = (selectedMonthNew) => {
        selectDate(selectedDay, selectedMonthNew, selectedYear);
        setSelectMonthyear({ status: false });
    };
    const renderMonth = months.map((x, i) => {
        if (i === selectedMonth) {
            return (
                <span
                    className={`${style["dropdown-item"]} ${style["active-item"]}`}
                    key={i}
                    onClick={() => getDaysOptionAndSelectMonth(i)}>
                    {x}
                </span>
            );
        } else {
            return (
                <span className={style["dropdown-item"]} key={i} onClick={() => getDaysOptionAndSelectMonth(i)}>
                    {x}
                </span>
            );
        }
    });
    const renderYears = getavailableYears(2019).map((x, i) => {
        if (x === selectedYear) {
            return (
                <span
                    className={`${style["dropdown-item"]} ${style["active-item"]}`}
                    key={i}
                    onClick={() => getMonthOptionsAndSelectYear(x)}>
                    {x}
                </span>
            );
        } else {
            return (
                <span className={style["dropdown-item"]} key={i} onClick={() => getMonthOptionsAndSelectYear(x)}>
                    {x}
                </span>
            );
        }
    });
    const getyearsOptions = () => {
        setSelectMonthyear((s) => {
            return { ...s, status: true };
        });
    };
    // console.log(renderDays)
    return (
        <div className={`${style["date-picker-dropdown"]} ${active && style["dropdown-active"]}`} onClick={(e) => e.stopPropagation()}>
            <div className={style["selected-year"]}>
                <i className="angle left icon" onClick={getPreviousMonth} />
                <span onClick={getyearsOptions}>
                    {months[selectedMonth].toUpperCase()} {selectedYear}
                </span>
                <i className="angle right icon" onClick={getNextMonth} />
            </div>
            <div
                className={`${style["dropdown-options"]} ${
                    selectMonthYear.status
                        ? selectMonthYear.yearSelected
                            ? style["dropdown-option-month"]
                            : style["dropdown-option-year"]
                        : ""
                }`}>
                {selectMonthYear.status ? (
                    ""
                ) : (
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
                {selectMonthYear.status ? (selectMonthYear.yearSelected ? renderMonth : renderYears) : renderDays()}
            </div>
        </div>
    );
};

export default DatePickerDropDown;
