import { useEffect, useRef } from "react";
import style from "../../../style/charts/chart.module.scss";
const OrdersByCategoryPie = () => {
    const ctx = useRef();
    useEffect(() => {
        new window.Chart(ctx.current.getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Electrician", "Cleaner", "Cartenter", "Plumber", "Painter", "Appliance", "Pest-Control", "Ac Expert"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [998, 1286, 754, 1051, 456, 821, 689, 1156],
                        backgroundColor: ["rgba(89, 89, 89, 0.6)", "rgba(54, 162, 235, 0.8)", "rgba(255, 205, 86, 0.8)", "rgba(255, 0, 136, 0.6)", "rgba(115, 0, 255, 0.8)", "rgba(0, 153, 59, 0.6)", "rgba(255, 89, 0, 0.8)", "rgba(102, 36, 0, 0.7)"],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Orders Count by Category",
                    },
                },
            },
        });
    }, []);
    return (
        <div className={style["user-chart-container"]}>
            <canvas id="members-chart" width="700" height="400" ref={ctx} />
        </div>
    );
};

export default OrdersByCategoryPie;
