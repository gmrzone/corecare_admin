import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import { useState } from "react";
import Modal from "../components/common/Modal";
import CreateUpdateForm from "../components/employees/CreateUpdateForm";
import { useForm } from "react-hook-form";
const Employees = () => {
    const [createUpdateModal, setCreateUpdateModal] = useState(false);
    const [formType, setFormType] = useState({type: null, header: null})
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();
    const closeCreateModal = () => {
        setCreateUpdateModal(false);
    };

    const openCreateModal = () => {
        setFormType({type: 'create', header: "Create Employee"})
        setCreateUpdateModal(true);
    };
    const openUpdateModal = ({ number, email, category, first_name, last_name, username, address_1, address_2, state, city, pincode }) => {
        setFormType({type: 'update', header: "Update Employee"})
        setValue("number", number, { shouldValidate: false });
        setValue("email", email, { shouldValidate: false });
        setValue("category", category.toLowerCase(), { shouldValidate: false });
        setValue("first_name", first_name, { shouldValidate: false });
        setValue("last_name", last_name, { shouldValidate: false });
        setValue("username", username, { shouldValidate: false });

        setValue("address_1", address_1, { shouldValidate: false });
        setValue("address_2", address_2, { shouldValidate: false });
        setValue("state", state, { shouldValidate: false });
        setValue("city", city, { shouldValidate: false });
        setValue("pincode", pincode, { shouldValidate: false });
        setCreateUpdateModal(true);
    };
    const SubmitCreateForm = (formValues, e) => {
        e.target.reset();
        console.log(formValues);
    };
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
            <tr
                style={{ cursor: "pointer" }}
                key={x.number + x.id}
                onClick={() =>
                    openUpdateModal({
                        number: x.number,
                        username: "saiyedafzal",
                        email: x.email,
                        category: x.type,
                        first_name: "Afzal",
                        last_name: "Saiyed",
                        address_1: "Room No 605, G Wing",
                        address_2: " Premier Road Mumbai",
                        city: "Mumbai",
                        state: "Maharashtra",
                        pincode: "400070",
                    })
                }>
                <td>{x.number}</td>
                <td>{x.email}</td>
                <td>{x.type}</td>
                <td>{x.last_seen}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal
                header={formType.header}
                active={createUpdateModal}
                closeModal={closeCreateModal}
                submitCreateForm={SubmitCreateForm}
                handleSubmit={handleSubmit}
                formError={formErrors}>
                <CreateUpdateForm register={register} formErrors={formErrors} />
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Employee" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} openUpdateModal={openUpdateModal} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Employees;
