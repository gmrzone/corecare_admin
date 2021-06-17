import style from '../../../style/datepicker.module.scss';
const DatePickerDropDown = ({ selectedYear, selectedMonth, selectedDay, days, getPreviousMonth, getNextMonth }) => {

    const renderDays = () => {
        const render = []
        let c = 0
        for (let i of days){
            if (i === undefined){
                render.push(<span key={c}></span>)
            }
            else if (i === selectedDay){
                render.push(<span className={`${style['dropdown-item']} ${style['active-item']}`} key={c}>{i}</span>)
            }
            else{
                render.push(<span className={style['dropdown-item']} key={c}>{i}</span>)
            }
            c++
        }
        return render
    }

    // console.log(renderDays)
    return (
        <div className={style['date-picker-dropdown']}>
            <div className={style['selected-year']}>
                <i className="angle left icon" onClick={getPreviousMonth}/>
                    <span>{selectedMonth.toUpperCase()} {selectedYear}</span>
                <i className="angle right icon" onClick={getNextMonth}/>
            </div>  
            <div className={style['dropdown-options']}>
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>  
                <span>F</span>
                <span>S</span>
                {/* <span></span>
                <span></span>
                <span></span>
                <span className={style['dropdown-item']}>1</span>
                <span className={style['dropdown-item']}>2</span>
                <span className={style['dropdown-item']}>3</span>
                <span className={style['dropdown-item']}>4</span>
                <span className={style['dropdown-item']}>5</span>
                <span className={style['dropdown-item']}>6</span>
                <span className={style['dropdown-item']}>7</span>
                <span className={style['dropdown-item']}>8</span>
                <span className={style['dropdown-item']}>9</span>
                <span className={style['dropdown-item']}>10</span>
                <span className={style['dropdown-item']}>11</span>
                <span className={style['dropdown-item']}>12</span>
                <span className={style['dropdown-item']}>13</span>
                <span className={style['dropdown-item']}>14</span>
                <span className={style['dropdown-item']}>15</span>
                <span className={style['dropdown-item']}>16</span>
                <span className={style['dropdown-item']}>17</span>
                <span className={style['dropdown-item']}>18</span>
                <span className={style['dropdown-item']}>19</span>
                <span className={style['dropdown-item']}>20</span>
                <span className={style['dropdown-item']}>21</span>
                <span className={style['dropdown-item']}>22</span>
                <span className={style['dropdown-item']}>23</span>
                <span className={style['dropdown-item']}>24</span>
                <span className={style['dropdown-item']}>25</span>
                <span className={style['dropdown-item']}>26</span>
                <span className={style['dropdown-item']}>27</span>
                <span className={style['dropdown-item']}>28</span>
                <span className={style['dropdown-item']}>29</span>
                <span className={style['dropdown-item']}>30</span>
                <span className={style['dropdown-item']}>31</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span> */}
                {renderDays()}
            </div>
        </div>
    )
}

export default DatePickerDropDown