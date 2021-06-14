import MainLayout from "../components/common/MainLayout";
import CreateAction from '../components/common/CreateAction'
import ListTable from '../components/common/ListTable'
import ComponentWrapper from '../components/common/ComponentWrapper'
const Users = () => {
    const tableData = [
        {
            id: 1,
            number: "7208333993",
            name: "AFzal saiyed",
            email: "saiyedafzalgz@gmail.com",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        },
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            name: "AFzal saiyed",
            last_seen: "1 Day ago",
            
        }
    ]
    const tableHead = [
        "Number",
        "Name",
        "email",
        "Last active"

    ]
    const tableBody = tableData.map(x => {
        return  (
            <tr style={{cursor: 'pointer'}}>
                <td>{x.number}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.last_seen}</td>
            </tr>
        )
    })
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="User"/>
            </ComponentWrapper>
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody}/>
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Users;
