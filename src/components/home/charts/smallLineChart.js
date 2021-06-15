import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const SmallLineChart = ({ data }) => {
    const ctx = useRef()
    useEffect(() => {
        new window.Chart(ctx.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: [
                  'Mon',
                  'Tue',
                  'Wed',
                  "Thr",
                  "Fri",
                  "Today",
                ],
                datasets: [{
                  data: data,
                  backgroundColor: [
                    '#fce8e6',
                  ],
                  borderColor : [
                    '#d93025'
                  ],
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });

    }, [data])
    return (
        <div className={style['small-line-chart-container']}>
            <canvas id="orders-chart" width="width" height="100" ref={ctx} aria-label="Hello ARIA World"/>
        </div>
    )
}

export default SmallLineChart