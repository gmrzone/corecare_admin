import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import useSWR from "swr";
import DateRangePicker from "../components/common/DateRangeFilter";
import axios from "../utils/variables";
import Modal from "../components/common/Modal";
import CreateUpdateUserForm from "../components/user/CreateUpdateUserForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Users = () => {
    const fetcher = (...args) => axios.get(...args).then((response) => response.data).catch();
    const { data: userData } = useSWR("administrator/get_all_user/", fetcher, { shouldRetryOnError: false });
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();
    const [createUpdateModal, setCreateUpdateModal] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    console.log(userData);
    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create User" });

        setValue("number", "", { shouldValidate: false });
        setValue("email", "", { shouldValidate: false });
        setValue("first_name", "", { shouldValidate: false });
        setValue("last_name", "", { shouldValidate: false });
        setValue("username", "", { shouldValidate: false });
        setValue("address_1", "", { shouldValidate: false });
        setValue("address_2", "", { shouldValidate: false });
        setValue("state", "", { shouldValidate: false });
        setValue("city", "", { shouldValidate: false });
        setValue("pincode", "", { shouldValidate: false });
        setValue("verified", false, { shouldValidate: false });

        setCreateUpdateModal(true);
    };
    const openUpdateModal = (number, email, first_name, last_name, username, address_1, address_2, state, city, pincode, verified) => {
        setFormType({ type: "update", header: "Update User" });
        setValue("number", number, { shouldValidate: false });
        setValue("email", email, { shouldValidate: false });
        setValue("first_name", first_name, { shouldValidate: false });
        setValue("last_name", last_name, { shouldValidate: false });
        setValue("username", username, { shouldValidate: false });
        setValue("address_1", address_1, { shouldValidate: false });
        setValue("address_2", address_2, { shouldValidate: false });
        setValue("state", state, { shouldValidate: false });
        setValue("city", city, { shouldValidate: false });
        setValue("pincode", pincode, { shouldValidate: false });
        setValue("verified", verified, { shouldValidate: false });

        setCreateUpdateModal(true);
    };
    const closeCreateModal = () => {
        setCreateUpdateModal(false);
    };
    const submitForm = (formValues, e) => {
        e.target.reset();
        setFormType(s => {
            return {...s, error: "You are not authorized to use this form please contact Super User."}
        })
        console.log(formValues);
    };
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
            <tr
                style={{ cursor: "pointer" }}
                key={x.id}
                onClick={() =>
                    openUpdateModal(
                        x.number,
                        x.email,
                        x.name.split(" ")[0],
                        x.name.split(" ")[1],
                        x.name.replace(/\s/, "").toLowerCase(),
                        "Room No 605, G Wing",
                        "Premier Road Mumbai",
                        "Maharashtra",
                        "Mumbai",
                        "400070",
                        true
                    )
                }>
                <td>{x.number}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.last_seen}</td>
            </tr>
        );
    });
    const dbData = userData?.map((x) => {
        return (
            <tr
                style={{ cursor: "pointer" }}
                key={x.id}
                onClick={() =>
                    openUpdateModal(
                        x.number,
                        x.email,
                        x.first_name,
                        x.last_name,
                        x.username,
                        x.address_1,
                        x.address_2,
                        x.state,
                        x.city,
                        x.pincode,
                        x.verified,
                    )
                }>
                <td>{x.number}</td>
                <td>{x.first_name + " " + x.last_name || x.username}</td>
                <td>{x.email || "-----"}</td>
                <td>{x.last_login || x.date_joined}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal
                header={formType.header}
                active={createUpdateModal}
                closeModal={closeCreateModal}
                submitForm={submitForm}
                handleSubmit={handleSubmit}>
                <CreateUpdateUserForm register={register} formErrors={formErrors} serverErrors={formType.error}/>
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="User" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={dbData || tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Users;
