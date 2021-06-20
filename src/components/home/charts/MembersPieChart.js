import { useEffect, useRef } from "react";
import style from "../../../style/charts/chart.module.scss";
const MembersPieChart = () => {
    const ctx = useRef();
    useEffect(() => {
        new window.Chart(ctx.current.getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Customers", "Employees", "Admin"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [300, 50, 3],
                        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 205, 86, 0.8)"],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Me mbers Stats",
                    },
                },
            },
        });
    }, []);
    return (
        <div className={style["user-chart-container"]}>
            <h2>Members Stats</h2>
            <canvas id="members-chart" width="700" height="400" ref={ctx} />
        </div>
    );
};

export default MembersPieChart;
