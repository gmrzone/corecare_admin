const CreateUpdateForm = ({ register, formErrors, serverErrors }) => {
    return (
        <>
            <div className={`field ${formErrors.category && "error"}`}>
                <label>Category</label>
                <select
                    className="ui fluid dropdown"
                    {...register("category", { required: { value: true, message: "Category is required" } })}>
                    <option value="">Select Category</option>
                    <option value="electrician">Electrician</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="plumber">Plumber</option>
                    <option value="cleaner">Cleaner</option>
                    <option value="painter">Painter</option>
                    <option value="appliance">Appliance Expert</option>
                    <option value="pest-control">Pest-Control</option>
                    <option value="ac-service">AC Expert</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className={`field ${formErrors.user && "error"}`}>
                <label>Author</label>
                <select className="ui fluid dropdown" {...register("author", { required: { value: true, message: "Author is required" } })}>
                    <option value="">Select Author</option>
                    <option value="afzal saiyed">Afzal Saiyed</option>
                    <option value="zaid shailh">Zaid Shaikh</option>
                    <option value="dalvi samar">Dalvi Samar</option>
                </select>
            </div>
            <div className={`field ${formErrors.title && "error"}`}>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    {...register("title", { required: { value: true, message: "Title is required" } })}
                />
            </div>
            <div className={`field ${formErrors.body && "error"}`}>
                <label>Body</label>
                <textarea
                    placeholder="Post Body"
                    {...register("body", {
                        required: { value: true, message: "Cannot Create A Post without Body" },
                        minLength: { value: 5, message: "Post Body cannot be less then 200 Char" },
                    })}
                />
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input type="checkbox" {...register("active")} />
                    <label>Active</label>
                </div>
            </div>
            <div
                className={`ui red message ${
                    formErrors.category || formErrors.author || formErrors.title || formErrors.body || serverErrors ? "visible" : "hidden"
                }`}>
                {formErrors.catetgory?.message ||
                    formErrors.author?.message ||
                    formErrors.title?.message ||
                    formErrors.body ||
                    serverErrors}
            </div>
        </>
    );
};

export default CreateUpdateForm;
