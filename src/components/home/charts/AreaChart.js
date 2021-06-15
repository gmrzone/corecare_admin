import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const AreaChart = ({ heading }) => {
    const ctx = useRef()

    useEffect(() => {
        const data = [300, 295, 200, 300, 600, 800, 100, 400, 300, 250, 560, 196]
        new window.Chart(ctx.current.getContext('2d'), {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        type: "line",
                        label: "Target",
                        // data: new Array(12).fill(250),
                        data:new Array(12).fill(250),
                        tension: 0.1,
                        backgroundColor:  [
                            'rgba(0, 0, 0, 1)'
                        ],
                        borderColor: [  
                            'rgba(0, 0, 0, 1)',
                        ],
                        borderWidth: 1
                    }, {
                    label: 'achieved',
                    fill: 'origin',
                    data: data,
                    type: "line",
                    
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)',
                        
                    ],  
                    borderColor: [  
                        'rgba(0, 7, 102, 0.8)',
                    ],
                    borderWidth: 1
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
            <h2>{heading}</h2>
            <canvas id="orders-chart" width="700" height="400" ref={ctx} aria-label="Hello ARIA World"/>
        </div>
    )
}

export default AreaChart