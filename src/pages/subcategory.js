import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import Modal from '../components/common/Modal'
import CreateUpdateForm from '../components/subcategory/createUpdateForm'
import { useState } from "react";
import { useForm } from "react-hook-form";
const Subcategory = () => {
    const tableData = [
        {
            name: "AC Service Consultation",
            category: "AC Expert",
            created: "1 Day ago",
        },
        {
            name: "Wallpaper / Stencils",
            category: "Painter",
            created: "1 Day ago",
        },
        {
            name: "Sofa Shampooing",
            category: "Cleaner",
            created: "1 Day ago",
        },
        {
            name: "Furniture Assembly",
            category: "Carpenter",
            created: "1 Day ago",
        },
        {
            name: "Minor Installation",
            category: "Plumber",
            created: "1 Day ago",
        },
        {
            name: "Room Heater",
            category: "Electrician",
            created: "1 Day ago",
        },
        {
            name: "Switch/Socket",
            category: "Electrician",
            created: "1 Day ago",
        },
    ];

    const [modalActive, setModalActive] = useState(false)
    const [formType, setFormType] = useState({type: null, header: null, error: null})
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const openCreateModal = () => {
        setFormType({type: 'create', header: "Update Subcategory"})
        setModalActive(true)
    }
    const openUpdateModal = () => {
        setFormType({type: 'update', header: "Update Subcategory"})
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false);
    };
    const onSubmit = () => {

    }
    const tableHead = ["Name", "Category", "Created"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr style={{ cursor: "pointer" }} key={i} onClick={openUpdateModal}>
                <td>{x.name}</td>
                <td>{x.category}</td>
                <td>{x.created}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal active={modalActive} header={formType.header} closeModal={closeModal} submitFor={onSubmit} handleSubmit={handleSubmit}>
                <CreateUpdateForm register={register} formErrors={formErrors} serverErrors={formType.error} />
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Subcategory" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Subcategory;
