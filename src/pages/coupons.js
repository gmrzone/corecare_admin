import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import Modal from "../components/common/Modal";
import CreateUpdateForm from "../components/coupons/createUpdateForm";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Coupons = () => {
    const currentDate = new Date();
    const tableData = [
        {
            id: 1234546,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 2234596,
            code: "FIRSTORDER",
            category: "Cleaner",
            discount: "20%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 3123654,
            code: "CORECR_21",
            category: "All",
            discount: "10%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 4456321,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 5856324,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 6963254,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
        {
            id: 7963254,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
        },
    ];
    const [modalActive, setModalActive] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    const [deleteModal, setDeleteModal] = useState({ active: false, id: null });
    const [couponValidityFrom, setCouponValidityFrom] = useState({
        day: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    });
    const [couponValidityTo, setCouponValidityTo] = useState({
        day: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    });
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors: formErrors },
    } = useForm();

    const closeModal = () => {
        setModalActive(false);
    };

    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create Coupon", error: null });
        setValue("CODE", "", { shouldValidate: false });
        setValue("discount", "", { shouldValidate: false });
        setValue("category", "", { shouldValidate: false });
        setValue("is_active", "", { shouldValidate: false });
        setModalActive(true);
    };

    const openUpdateModal = (code, discount, category, is_active, validFrom, validTo) => {
        setFormType({ type: "update", header: "Update Coupon", error: null });
        setValue("CODE", code, { shouldValidate: false });
        setValue("discount", discount, { shouldValidate: false });
        setValue("category", category, { shouldValidate: false });
        setValue("is_active", is_active, { shouldValidate: false });
        setCouponValidityFrom({ day: validFrom.getDate(), month: validFrom.getMonth(), year: validFrom.getFullYear() });
        setCouponValidityTo({ day: validTo.getDate(), month: validTo.getMonth(), year: validTo.getFullYear() });
        setModalActive(true);
    };

    const formSubmit = (formValues, e) => {
        e.target.reset();
        setFormType((s) => {
            return { ...s, error: "You are not authorized to use this form please contact Super User." };
        });
        console.log(formValues, couponValidityFrom, couponValidityTo);
    };
    const openDeleteModal = (e, id) => {
        e.stopPropagation();
        setFormType({ type: "delete", header: `Are you sure you want to Delete Coupon with ID ${id}` });
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
    const tableHead = ["Code", "Category", "Discount", "Valid from", "Valid to", "Delete"];
    const tableBody = tableData.map((x) => {
        return (
            <tr
                style={{ cursor: "pointer" }}
                key={x.id}
                onClick={() =>
                    openUpdateModal(
                        x.code,
                        parseInt(x.discount),
                        x.category.toLowerCase(),
                        true,
                        new Date(2021, 5, 14),
                        new Date(2022, 5, 14),
                    )
                }>
                <td>{x.code}</td>
                <td>{x.category}</td>
                <td>{x.discount}</td>
                <td>{x.from}</td>
                <td>{x.to}</td>
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
                active={modalActive}
                header={formType.header}
                closeModal={closeModal}
                submitForm={formSubmit}
                handleSubmit={handleSubmit}>
                <CreateUpdateForm
                    register={register}
                    formErrors={formErrors}
                    serverErrors={formType.error}
                    couponValidityFrom={couponValidityFrom}
                    setCouponValidityFrom={setCouponValidityFrom}
                    couponValidityTo={couponValidityTo}
                    setCouponValidityTo={setCouponValidityTo}
                />
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
                <CreateAction forPage="Coupon" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Coupons;
