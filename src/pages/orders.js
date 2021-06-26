import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import { useHistory } from 'react-router-dom'
const Orders = () => {
    const history = useHistory()
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
    const createOrder = () => {
        history.push('/orders/create')
    }
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Order" openCreateModal={createOrder}/>
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};
export default Orders;
