import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const TempChart = () => {
    const ctx = useRef()

    useEffect(() => {
        const data = [300, 295, 200, 300, 600, 900, 100, 400, 300, 250, 560, 196]
        new window.Chart(ctx.current.getContext('2d'), {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: 'achieved',
                    data: data,
                    type: "bar",
                    backgroundColor: [
                        'rgb(0, 153, 102, 0.2)',
                        
                    ],  
                    borderColor: [  
                        'rgb(0, 153, 102, 1)',
                    ],
                    borderWidth: 1
                },
                {
                    type: "line",
                    label: "Target",
                    // data: new Array(12).fill(250),
                    data:new Array(12).fill(250),
                    tension: 0.1,
                    backgroundColor:  ['rgba(0, 0, 0, 1)'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }, [])
    return (
        <div className={style['sales-chart-container']}>
            <canvas id="myChart" width="700" height="400" ref={ctx} aria-label="Hello ARIA World"/>
        </div>
    )
}

export default TempChart