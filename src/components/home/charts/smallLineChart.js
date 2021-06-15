import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const SmallLineChart = () => {
    const ctx = useRef()
    useEffect(() => {
        new window.Chart(ctx.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: [
                  'Mon',
                  'Tue',
                  'Wednesday',
                  "thursday",
                  "friday",
                  "saturday",
                ],
                datasets: [{
                  data: [150, 50, 75, 45, 60, 160],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                  ],
                  borderColor : [

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

    }, [])
    return (
        <div className={style['small-line-chart-container']}>
            <canvas id="orders-chart" width="width" height="100" ref={ctx} aria-label="Hello ARIA World"/>
        </div>
    )
}

export default SmallLineChart