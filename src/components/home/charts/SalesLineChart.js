import { useEffect, useRef } from "react";
import style from "../../../style/charts/chart.module.scss";
const SalesLineChart = () => {
    const ctx = useRef();
    useEffect(() => {
        new window.Chart(ctx.current.getContext("2d"), {
            data: {
                labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        type: "bar",
                        label: "Cleaner",
                        data: [20, 25, 6, 30, 8, 11, 15, 36, 16, 15, 15, 25],
                        backgroundColor: "rgba(0, 204, 153, 0.4)",
                        borderColor: "rgba(0, 204, 153, 1)",
                        borderWidth: 1,
                    },
                    {
                        type: "bar",
                        label: "Cleaner",
                        data: [15, 35, 11, 69, 45, 10, 35, 48, 20, 9, 6, 20],
                        backgroundColor: "rgba(0, 204, 153, 0.4)",
                        borderColor: "rgba(0, 204, 153, 1)",
                        borderWidth: 1,
                    },
                    {
                        type: "bar",
                        label: "Cleaner",
                        data: [15, 35, 11, 69, 45, 10, 35, 48, 20, 9, 6, 20],
                        backgroundColor: "rgba(0, 204, 153, 0.4)",
                        borderColor: "rgba(0, 204, 153, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        display: window.innerWidth > 768 ? true : false,
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Sales by Category",
                    },
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                        position: "top",
                    },
                },
            },
        });
    }, []);
    return (
        <div className={style["sales-line-chart"]}>
            <canvas id="orders-chart" ref={ctx} />
        </div>
    );
};

export default SalesLineChart;
