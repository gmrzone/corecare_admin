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
    const [deleteModal, setDeleteModal] = useState({ active: false, title: null, id: null });
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
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
        setFormType({ type: "create", header: "Create Employee" });

        setValue("number", "", { shouldValidate: false });
        setValue("email", "", { shouldValidate: false });
        setValue("category", "", { shouldValidate: false });
        setValue("first_name", "", { shouldValidate: false });
        setValue("last_name", "", { shouldValidate: false });
        setValue("username", "", { shouldValidate: false });
        setValue("address_1", "", { shouldValidate: false });
        setValue("address_2", "", { shouldValidate: false });
        setValue("state", "", { shouldValidate: false });
        setValue("city", "", { shouldValidate: false });
        setValue("pincode", "", { shouldValidate: false });
        setValue("is_verified_employee", false, { shouldValidate: false });

        setCreateUpdateModal(true);
    };
    const openUpdateModal = ({
        number,
        email,
        category,
        first_name,
        last_name,
        username,
        address_1,
        address_2,
        state,
        city,
        pincode,
        is_verified_employee,
    }) => {
        setFormType({ type: "update", header: "Update Employee" });

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
        setValue("is_verified_employee", is_verified_employee, { shouldValidate: false });

        setCreateUpdateModal(true);
    };
    const SubmitForm = (formValues, e) => {
        e.target.reset();
        setFormType((s) => {
            return { ...s, error: "You are not authorized to use this form please contact Super User." };
        });
        console.log(formValues);
    };

    const openDeleteModal = (e, id, title) => {
        e.stopPropagation();
        setFormType({ type: "delete", header: `Are you sure you want to delete employee with number '${title}'` });
        setDeleteModal({ active: true, id: id });
    };
    const closeDeleteModal = () => {
        setDeleteModal({ active: false, id: null });
    };
    const deleteAction = () => {
        setFormType((s) => {
            return { ...s, error: "You are not authorized to to delete any Data." };
        });

        console.log("delete", deleteModal.id);
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
    const tableHead = ["Number", "email", "Type", "Last active", "Delete"];
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
                        is_verified_employee: true,
                    })
                }>
                <td>{x.number}</td>
                <td>{x.email}</td>
                <td>{x.type}</td>
                <td>{x.last_seen}</td>
                <td>
                    <button className="ui negative small button icon compact" onClick={(e) => openDeleteModal(e, x.id, x.number)} data-id={x.id}>
                        <i className="trash icon" data-id={x.id} />
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal
                isForm={true}
                header={formType.header}
                active={createUpdateModal}
                closeModal={closeCreateModal}
                submitForm={SubmitForm}
                handleSubmit={handleSubmit}
                formError={formErrors}>
                <CreateUpdateForm register={register} formErrors={formErrors} serverErrors={formType.error} />
            </Modal>
            <Modal
                isForm={false}
                header={formType.header}
                active={deleteModal.active}
                closeModal={closeDeleteModal}
                handleNoFormClick={deleteAction}>
                <div className={`ui red message ${formType.error ? "visible" : "hidden"}`}>{formType.error}</div>
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
