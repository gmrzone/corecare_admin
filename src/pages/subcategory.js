import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import Modal from "../components/common/Modal";
import CreateUpdateForm from "../components/subcategory/createUpdateForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Subcategory = () => {
    const tableData = [
        {
            name: "AC Service Consultation",
            service_specialist: "Ac-Service",
            created: "1 Day ago",
        },
        {
            name: "Wallpaper / Stencils",
            service_specialist: "Painter",
            created: "1 Day ago",
        },
        {
            name: "Sofa Shampooing",
            service_specialist: "Cleaner",
            created: "1 Day ago",
        },
        {
            name: "Furniture Assembly",
            service_specialist: "Carpenter",
            created: "1 Day ago",
        },
        {
            name: "Minor Installation",
            service_specialist: "Plumber",
            created: "1 Day ago",
        },
        {
            name: "Room Heater",
            service_specialist: "Electrician",
            created: "1 Day ago",
        },
        {
            name: "Switch/Socket",
            service_specialist: "Electrician",
            created: "1 Day ago",
        },
    ];

    const [modalActive, setModalActive] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    const [deleteModal, setDeleteModal] = useState({ active: false, title: null, id: null });
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create Subcategory" });
        setValue("name", "", { shouldValidate: false });
        setValue("service_specialist", "", { shouldValidate: false });
        setValue("slug", "", { shouldValidate: false });
        setValue("slug", "", { shouldValidate: false });
        setModalActive(true);
    };
    const openUpdateModal = (name, service_specialist, slug) => {
        setFormType({ type: "update", header: "Update Subcategory" });
        setValue("name", name, { shouldValidate: false });
        setValue("service_specialist", service_specialist, { shouldValidate: false });
        setValue("slug", slug, { shouldValidate: false });
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
    const openDeleteModal = (e, id, title) => {
        e.stopPropagation();
        setFormType({ type: "delete", header: `Are you sure you want to Delete Subcategory '${title}'` });
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
    const tableHead = ["Name", "Category", "Created", "Delete"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr
                style={{ cursor: "pointer" }}
                key={i}
                onClick={() =>
                    openUpdateModal(
                        x.name,
                        x.service_specialist.toLowerCase(),
                        x.name.replace(/(\/)/gi, "-").replaceAll(" ", "-").toLowerCase(),
                    )
                }>
                <td>{x.name}</td>
                <td>{x.service_specialist}</td>
                <td>{x.created}</td>
                <td>
                    <button className="ui negative small button icon compact" onClick={(e) => openDeleteModal(e, x.id, x.name)} data-id={x.id}>
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
