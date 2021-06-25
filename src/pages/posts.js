import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import ListTable from "../components/common/ListTable";
import { useState } from "react";
import Modal from "../components/common/Modal";
import { useForm } from "react-hook-form";
import CreateUpdateForm from "../components/posts/CreateUpdateForm";
const Posts = () => {
    const tableData = [
        {
            id: 1,
            title: "Nuxt Auth loginWith function doesn't send data to DRF",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "Cleaner",
            active: true
        },
        {
            id: 2,
            title: "Luxury Bathrooms: Steal These 7 Clever (And Practical!) Ideas",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "Electrician",
            active: true
        },
        {
            id: 3,
            title: "Vastu for Toilets & Bathrooms: 5+ Helpful Tips for Your Indian Home",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "",
            active: true
        },
        {
            id: 4,
            title: "5 Best Places To Install CCTV In Your Home",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "Cleaner",
            active: true
        },
        {
            id: 5,
            title: "7 Ways CCTVs Might Disappoint You",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "Cleaner",
            active: true
        },
        {
            id: 6,
            title: "Top 5 Things to Consider While Hiring A CCTV Camera Dealer",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "Cleaner",
            active: true
        },
        {
            id: 7,
            title: "How To Purify Your Home & Breathe Healthy",
            author: "AFzal Saiyed",
            body: "Post Body",
            category: "",
            active: true
        },
    ];
    const [createUpdateModal, setCreateUpdateModal] = useState(false);
    const [formType, setFormType] = useState({type: null, header: null, error: null})
    const openCreateModal = () => {
        setFormType({type: "create", header: "Create Post", error: null})
        setValue('title', "", {shouldValidate: false})
        setValue('author', "", {shouldValidate: false})
        setValue('body', "", {shouldValidate: false})
        setValue('category', "" || "others", {shouldValidate: false})
        setValue('active', "", {shouldValidate: false})
        setCreateUpdateModal(true)
    }   
    const openUpdateModal = (title, author, body, category, active) => {
        setFormType({type: "update", header: "Update Post", error: null})
        setValue('title', title, {shouldValidate: false})
        setValue('author', author, {shouldValidate: false})
        setValue('body', body, {shouldValidate: false})
        setValue('category', category || "others", {shouldValidate: false})
        setValue('active', active, {shouldValidate: false})
        setCreateUpdateModal(true)
    }
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const closeCreateModal = () => {
        setCreateUpdateModal(false);
    };
    const SubmitForm = (formValues, e) => {
        e.target.reset();
        setFormType(s => {
            return {...s, error: "You are not authorized to use this form please contact Super User."}
        })
        console.log(formValues);
    };
    const tableHead = ["title", "Author", "Body", "Category", "Active"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr key={x.id} onClick={() => openUpdateModal(x.title, x.author.toLowerCase(), x.body, x.category.toLowerCase(), x.active)} style={{ cursor: "pointer" }}>
                <td>{x.title.substring(0, 20) + "..."}</td>
                <td>{x.author}</td>
                <td>{x.body}</td>
                <td>{x.category || "Others"}</td>
                <td>{x.active.toString()}</td>
            </tr>
        )
    })
    return (
        <MainLayout>
            <Modal
                header={formType.header}
                active={createUpdateModal}
                closeModal={closeCreateModal}
                submitForm={SubmitForm}
                handleSubmit={handleSubmit}
                formError={formErrors}>
                <CreateUpdateForm register={register} formErrors={formErrors} serverErrors={formType.error}/>
            </Modal>
            <ComponentWrapper>
                <CreateAction forPage="Post" openCreateModal={openCreateModal} />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Posts;
