import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const AreaChart = ({ heading, data, target, chartBG, chartBorder, LineColor }) => {
    const ctx = useRef()

    useEffect(() => {
        
        new window.Chart(ctx.current.getContext('2d'), {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        type: "line",
                        label: "Target",
                        // data: new Array(12).fill(250),
                        data:new Array(12).fill(target),
                        tension: 0.1,
                        backgroundColor:  [
                            LineColor
                        ],
                        borderColor: [  
                            LineColor
                        ],
                        borderWidth: 1
                    }, {
                    label: 'achieved',
                    fill: 'origin',
                    data: data,
                    type: "line",
                    
                    backgroundColor: [
                        chartBG,
                        
                    ],  
                    borderColor: [  
                        chartBorder,
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        display: window.innerWidth > 768 ? true : false
                    }
                }
            }
        });

    }, [data, LineColor, chartBG, chartBorder, target])
    return (
        <div className={style['area-chart-container']}>
            <h2>{heading}</h2>
            <canvas id="orders-chart" width="700" height="400" ref={ctx} aria-label="Hello ARIA World"/>
        </div>
    )
}

export default AreaChart