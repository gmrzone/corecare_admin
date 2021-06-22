import style from "../../style/index.module.scss";
import ListTable from "../common/ListTable";
import NewLink from '../common/Link'
const recentActiveOrders = () => {
    const tableData = [
        {
            order_id: 1234546,
            status: "Fullfilled",
            user: "AFzal saiyed",
            total: "1000.93",
            created: "1 Day ago",
        },
        {
            order_id: 2234596,
            status: "Pending",
            total: "2600.56",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
        {
            order_id: 3123654,
            status: "Fullfilled",
            total: "1100.00",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
        {
            order_id: 4456321,
            status: "Fullfilled",
            total: "4300.93",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
        {
            order_id: 5856324,
            status: "Pending",
            total: "934.34",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
        {
            order_id: 6963254,
            status: "Fullfilled",
            total: "53000.50",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
        {
            order_id: 7963254,
            status: "Fullfilled",
            total: "3890.02",
            user: "AFzal saiyed",
            created: "1 Day ago",
        },
    ];
    const tableHead = ["Order ID", "User", "Status", "Total", "Created"];
    const tableBody = tableData.map((x) => {
        return (
            <tr style={{ cursor: "pointer" }} key={x.order_id}>
                <td>{x.order_id}</td>
                <td>{x.user}</td>
                <td>{x.status}</td>
                <td>{x.total}</td>
                <td>{x.created}</td>
            </tr>
        );
    });
    return (
        <div className={style["active-orders-container"]}>
            <div className={style["active-orders-head"]}>
                <h3>Recent Active Orders</h3>
            </div>
            <div className={style["active-orders-body"]}>
                <ListTable headData={tableHead} bodyData={tableBody}/>
            </div>
            <div className={style["active-orders-footer"]}>
                <NewLink className="ui button" to="/orders">
                    View All
                </NewLink>
            </div>
        </div>
    );
};
export default recentActiveOrders;
