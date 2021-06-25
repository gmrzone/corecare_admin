import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import ListTable from "../components/common/ListTable";
import { useState } from "react";
import Modal from "../components/common/Modal";
import { useForm } from "react-hook-form";
import CreateUpdateForm from "../components/comments/createUpdateForm";
const Comments = () => {
    const tableData = [
        {
            id: 1,
            post: "Nuxt Auth loginWith function doesn't send data to DRF",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 8,
            post: "Nuxt Auth loginWith function doesn't send data to DRF",
            user: "AFzal Saiyed",
            comment: "Post Comment Reply",
            parent: 1,
            active: true,
        },
        {
            id: 2,
            post: "Luxury Bathrooms: Steal These 7 Clever (And Practical!) Ideas",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 3,
            post: "Vastu for Toilets & Bathrooms: 5+ Helpful Tips for Your Indian Home",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 4,
            post: "5 Best Places To Install CCTV In Your Home",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 5,
            post: "7 Ways CCTVs Might Disappoint You",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 6,
            post: "Top 5 Things to Consider While Hiring A CCTV Camera Dealer",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
        {
            id: 7,
            post: "How To Purify Your Home & Breathe Healthy",
            user: "AFzal Saiyed",
            comment: "Post Comment",
            parent: "",
            active: true,
        },
    ];
    const [createUpdateModal, setCreateUpdateModal] = useState(false);
    const [formType, setFormType] = useState({ type: null, header: null, error: null });
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const SubmitForm = (formValues, e) => {
        e.target.reset();
        setFormType((s) => {
            return { ...s, error: "You are not authorized to use this form please contact Super User." };
        });
        console.log(formValues);
    };
    const openCreateModal = () => {
        setFormType({ type: "create", header: "Create Comment", error: false });
        setValue("user", "", { shouldValidate: false });
        setValue("post", "", { shouldValidate: false });
        setValue("comment", "", { shouldValidate: false });
        setValue("active", false, { shouldValidate: false });
        setCreateUpdateModal(true);
    };
    const openUpdateModal = (user, post, comment, active) => {
        setFormType({ type: "update", header: "Update Comment", error: false });
        setValue("user", user, { shouldValidate: false });
        setValue("post", post, { shouldValidate: false });
        setValue("comment", comment, { shouldValidate: false });
        setValue("active", active, { shouldValidate: false });
        setCreateUpdateModal(true);
    };
    const closeModal = () => {
        setCreateUpdateModal(false);
    };
    const tableHead = ["User", "Post", "Parent", "Comment", "Active"];
    const tableBody = tableData.map((x) => {
        return (
            <tr
                style={{ cursor: "pointer" }}
                key={x.id}
                onClick={() => openUpdateModal(x.user.toLowerCase(), x.post.toLowerCase(), x.comment, x.active)}>
                <td>{x.user}</td>
                <td>{x.post.substring(0, 20) + "..."}</td>
                <td>{x.parent || "NULL"}</td>
                <td>{x.comment}</td>
                <td>{x.active.toString()}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <Modal
                header={formType.header}
                active={createUpdateModal}
                closeModal={closeModal}
                submitForm={SubmitForm}
                handleSubmit={handleSubmit}
                formError={formErrors}>
                <CreateUpdateForm register={register} formErrors={formErrors} serverErrors={formType.error} />
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Comment" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Comments;
