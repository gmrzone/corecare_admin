import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import Modal from "../components/common/Modal";
import CreateUpdateForm from '../components/services/createUpdateForm';
import { useState } from "react";
import { useForm } from "react-hook-form";
const Services = () => {
    const tableData = [
        {
            name: "Window AC Service",
            subcategory: "AC Service",
            price: "449.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Wallpaper / Stencils Consultation",
            subcategory: "Wallpaper / Stencils",
            price: "2600.56",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Wood Polishing Consultation",
            subcategory: "Wood Polishing",
            price: "999.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Drill and Hang",
            subcategory: "Drill/Hang",
            price: "256.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Channel Repair",
            subcategory: "Cupboard / Drawer",
            price: "149.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "AC Switchbox Installation",
            subcategory: "Switch/Socket",
            price: "319.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Geyser Installation",
            subcategory: "Appliances",
            price: "650.00",
            active: "true",
            created: "1 Day ago",
        },
    ];
    const [modalActive, setModalActive] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create Service" });
        setValue('name', "", {shouldValidate: false})
        setValue('subcategory', "", {shouldValidate: false})
        setValue('price', "0.0", {shouldValidate: false})
        setValue('active', false, {shouldValidate: false})
        setModalActive(true)
    }

    const openUpdateModal = (name, price, subcategory, slug, active) => {
        setFormType({ type: "update", header: "Update Service" });
        setValue('name', name, {shouldValidate: false})
        setValue('subcategory', subcategory, {shouldValidate: false})
        setValue('price', price, {shouldValidate: false})
        setValue('slug', slug, {shouldValidate: false})
        setValue('active', active, {shouldValidate: false})
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false)
    }

    const onSubmit = (formValues, e) => {
        e.target.reset()
        setFormType(s => {
            return {...s, error: "You are not authorized to use this form please contact Super User."}
        })
        console.log(formValues)
    }

    const tableHead = ["Name", "Category", "Price", "Active", "Created"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr style={{ cursor: "pointer" }} key={i} onClick={() => openUpdateModal(x.name, x.price, x.subcategory.toLowerCase(), x.name.replace(/(\/)/gi, "-").replaceAll(" ", "-").toLowerCase(), true)}>
                <td>{x.name}</td>
                <td>{x.subcategory}</td>
                <td>{x.price}</td>
                <td>{x.active}</td>
                <td>{x.created}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
        <Modal
                header={formType.header}
                active={modalActive}
                closeModal={closeModal}
                submitForm={onSubmit}
                handleSubmit={handleSubmit}
                formError={formErrors}>
            <CreateUpdateForm register={register} formErrors={formErrors} serverErrors={formType.error} />
        </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Service" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Services;
