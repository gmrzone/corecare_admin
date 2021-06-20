import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import useSWR from "swr";
import DateRangePicker from "../components/common/DateRangeFilter";
import axios from "../utils/variables";
const Users = () => {
    const fetcher = (...args) => axios.get(...args).then((response) => response.data);
    const { data: userData } = useSWR("administrator/get_all_user/", fetcher, { shouldRetryOnError: false });
    console.log(userData);
    const tableData = [
        {
            id: 1,
            number: "7208333993",
            name: "AFzal saiyed",
            email: "saiyedafzalgz@gmail.com",
            last_seen: "1 Day ago",
        },
        {
            id: 2,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
        {
            id: 3,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
        {
            id: 4,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
        {
            id: 5,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
        {
            id: 6,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
        {
            id: 7,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
        },
    ];
    const tableHead = ["Number", "Name", "email", "Last active"];
    const tableBody = tableData.map((x) => {
        return (
            <tr style={{ cursor: "pointer" }} key={x.id}>
                <td>{x.number}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.last_seen}</td>
            </tr>
        );
    });
    const dbData = userData?.map((x) => {
        return (
            <tr style={{ cursor: "pointer" }} key={x.id}>
                <td>{x.number}</td>
                <td>{x.first_name + " " + x.last_name || x.username}</td>
                <td>{x.email || "-----"}</td>
                <td>{x.last_login || x.date_joined}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="User" />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={dbData || tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Users;
