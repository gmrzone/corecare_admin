import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import { useState } from 'react'
import Modal from '../components/common/Modal';
import CreateUpdateForm from '../components/employees/CreateUpdateForm'
const Employees = () => {
    const [createUpdateModal, setCreateUpdateModal] = useState(false)
    const closeCreateModal = () => {
        setCreateUpdateModal(false)
    }

    const openCreateModal= () => {
        setCreateUpdateModal(true)
    }
    const tableData = [
        {
            id: 1,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 2,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 3,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 4,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 5,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 6,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
        {
            id: 7,
            number: "7208333993",
            email: "saiyedafzalgz@gmail.com",
            type: "Cleaner",
            last_seen: "1 Day ago",
        },
    ];
    const tableHead = ["Number", "email", "Type", "Last active"];
    const tableBody = tableData.map((x) => {
        return (
            <tr style={{ cursor: "pointer" }} key={x.number + x.id}>
                <td>{x.number}</td>
                <td>{x.email}</td>
                <td>{x.type}</td>
                <td>{x.last_seen}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal header="Create Employee" active={createUpdateModal} closeModal={closeCreateModal}>
                <CreateUpdateForm />
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Employee" openCreateModal={openCreateModal}/>
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Employees;
