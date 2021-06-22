import style from "../../style/index.module.scss";
import Card from "./Card";
const OrderStatusList = () => {
    return (
        <div className={style["orders-stats"]}>
            <Card head="Total Orders" text="9846" chartData={[150, 50, 75, 45, 60, 160]} classRef={style["card-fluid"]} />
            <Card head="Fullfilled Orders" text="8003" chartData={[120, 49, 70, 30, 59, 150]} classRef={style["card-fluid"]} />
            <Card head="Pending Orders" text="1569" chartData={[20, 0, 4, 5, 25, 5]} classRef={style["card-fluid"]} />
            <Card head="Active Orders" text="301" chartData={[10, 1, 1, 10, 5, 5]} classRef={style["card-fluid"]} />
            <Card
                head="Total Revenue"
                text="Rs. 8650159"
                chartData={[15000, 6500, 9580, 15086, 22065, 16005]}
                classRef={style["card-fluid"]}
            />
        </div>
    );
};

export default OrderStatusList;
