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
                        cubicInterpolationMode: 'monotone',
                        tension: 0.4,
                        backgroundColor:  [
                            LineColor
                        ],
                        borderColor: [  
                            LineColor
                        ],
                        borderWidth: 1,
                        fill: false,
                        borderDash: [5, 5],
                        pointStyle: 'rectRot',
                    }, {
                    label: 'achieved',
                    fill: 'origin',
                    data: data,
                    type: "line",
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4,
                    
                    backgroundColor: [
                        chartBG,
                        
                    ],  
                    borderColor: [  
                        chartBorder,
                    ],
                    borderWidth: 1,
                    
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        display: window.innerWidth > 768 ? true : false
                    }
                },
                plugins: {
                    title : {
                        display: true,
                        text: heading,
                    },
                    legend : {
                        labels : {
                            usePointStyle: true,
                        }
                    }
                },
                interaction: {
                    intersect: false,
                  },
            }
        });

    }, [data, LineColor, chartBG, chartBorder, target, heading])
    return (
        <div className={style['area-chart-container']}>
            <canvas id="orders-chart" width="700" height="400" ref={ctx} />
        </div>
    )
}

export default AreaChart