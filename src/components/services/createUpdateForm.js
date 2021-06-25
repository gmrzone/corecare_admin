const createUpdateForm = ({ register, formErrors, serverErrors }) => {
    return (
        <>
            <div className={`field ${formErrors.name && "error"}`}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="name"
                    {...register("name", {
                        required: { value: true, message: "Cannot create or Update a subcategory without a name" },
                        minLength: { value: 3, message: "Subcategory cannot be less then 3 Char" },
                    })}
                />
            </div>
            <div className={`field ${formErrors.slug && "error"}`}>
                <label>Slug</label>
                <input type="text" placeholder="slug" {...register("slug")} />
            </div>
            <div className={`field ${formErrors.price && "error"}`}>
                <label>Price</label>
                <input type="number" {...register("price", { require: { value: true, message: "Price is required" } })} step="0.01" />
            </div>
            <div className={`field ${formErrors.description && "error"}`}>
                <label>Description</label>
                <textarea placeholder="Service Description" {...register("description")} />
            </div>
            <div className={`field ${formErrors.subcategory && "error"}`}>
                <label>SubCategory</label>
                <select
                    className="ui fluid dropdown"
                    {...register("subcategory", { required: { value: true, message: "Employee Category is required" } })}>
                    <option value="">Select Category</option>
                    <option value="appliances">Appliances</option>
                    <option value="switch/socket">Switch/Socket</option>
                    <option value="cupboard / drawer">Cupboard / Drawer</option>
                    <option value="drill/hang">Drill/Hang</option>
                    <option value="wood polishing">Wood Polishing</option>
                    <option value="wallpaper / stencils">Wallpaper / Stencils</option>
                    <option value="ac service">AC Service</option>
                </select>
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input type="checkbox" {...register("active")} />
                    <label>Active</label>
                </div>
            </div>
            <div
                className={`ui red message ${
                    formErrors.name || formErrors.price || formErrors.subcategory || serverErrors ? "visible" : "hidden"
                }`}>
                {formErrors.name?.message || formErrors.price?.message || formErrors.subcategory?.message || serverErrors}
            </div>
        </>
    );
};

export default createUpdateForm;
