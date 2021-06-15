import {useEffect, useRef} from 'react'
import style from '../../../style/charts/chart.module.scss';
const EmployeeChart = () => {
    const ctx = useRef()
    useEffect(() => {
        new window.Chart(ctx.current.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: [
                  'Electrician',
                  'Cleaner',
                  'Cartenter',
                  'Plumber',
                  'Painter',
                  'Appliance',
                  "Pest-Control",
                  "Ac Expert"
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: [30, 20, 25, 20, 35, 20, 15, 20],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(128, 128, 128, 0.8)',
                    'rgba(255, 51, 0, 0.8)',
                    'rgba(63, 141, 119, 0.8)',
                    'rgba(141, 63, 63, 0.8)',
                    'rgba(128, 63, 141, 0.8)',
                  ],
                  hoverOffset: 4
                }]
            },
            // options: {
            //     scales: {
            //         y: {
            //             beginAtZero: true
            //         }
            //     }
            // }
        });

    }, [])
    return (
        <div className={style['user-chart-container']}>
            <h2>Employee Stats</h2>
             <canvas id="members-chart" width="700" height="400" ref={ctx} />
        </div>
    )
}

export default EmployeeChart