import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import Modal from "../components/common/Modal";
import CreateUpdateForm from "../components/services/createUpdateForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Services = () => {
    const tableData = [
        {   
            id: 1,
            name: "Window AC Service",
            subcategory: "AC Service",
            price: "449.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 2,
            name: "Wallpaper / Stencils Consultation",
            subcategory: "Wallpaper / Stencils",
            price: "2600.56",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 3,
            name: "Wood Polishing Consultation",
            subcategory: "Wood Polishing",
            price: "999.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 4,
            name: "Drill and Hang",
            subcategory: "Drill/Hang",
            price: "256.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 5,
            name: "Channel Repair",
            subcategory: "Cupboard / Drawer",
            price: "149.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 6,
            name: "AC Switchbox Installation",
            subcategory: "Switch/Socket",
            price: "319.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            id: 7,
            name: "Geyser Installation",
            subcategory: "Appliances",
            price: "650.00",
            active: "true",
            created: "1 Day ago",
        },
    ];
    const [modalActive, setModalActive] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    const [deleteModal, setDeleteModal] = useState({ active: false, id: null });
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create Service" });
        setValue("name", "", { shouldValidate: false });
        setValue("subcategory", "", { shouldValidate: false });
        setValue("price", "0.0", { shouldValidate: false });
        setValue("active", false, { shouldValidate: false });
        setModalActive(true);
    };

    const openUpdateModal = (name, price, subcategory, slug, active) => {
        setFormType({ type: "update", header: "Update Service" });
        setValue("name", name, { shouldValidate: false });
        setValue("subcategory", subcategory, { shouldValidate: false });
        setValue("price", price, { shouldValidate: false });
        setValue("slug", slug, { shouldValidate: false });
        setValue("active", active, { shouldValidate: false });
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    const onSubmit = (formValues, e) => {
        e.target.reset();
        setFormType((s) => {
            return { ...s, error: "You are not authorized to use this form please contact Super User." };
        });
        console.log(formValues);
    };
    const openDeleteModal = (e, id) => {
        e.stopPropagation();
        setFormType({ type: "delete", header: `Are you sure you want to Delete Service with ID ${id}` });
        setDeleteModal({ active: true, id: id });
    };
    const closeDeleteModal = () => {
        setDeleteModal({ active: false, id: null });
    };
    const deleteAction = () => {
        setFormType((s) => {
            return { ...s, error: "You are not authorized to to delete any Data." };
        });
        console.log(deleteModal.id);
    };
    const tableHead = ["Name", "Category", "Price", "Active", "Created", "Delete"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr
                style={{ cursor: "pointer" }}
                key={i}
                onClick={() =>
                    openUpdateModal(
                        x.name,
                        x.price,
                        x.subcategory.toLowerCase(),
                        x.name.replace(/(\/)/gi, "-").replaceAll(" ", "-").toLowerCase(),
                        true,
                    )
                }>
                <td>{x.name}</td>
                <td>{x.subcategory}</td>
                <td>{x.price}</td>
                <td>{x.active}</td>
                <td>{x.created}</td>
                <td>
                    <button className="ui negative small button icon compact" onClick={(e) => openDeleteModal(e, x.id)} data-id={x.id}>
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
                active={modalActive}
                closeModal={closeModal}
                submitForm={onSubmit}
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
