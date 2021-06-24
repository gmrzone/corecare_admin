const createUpdateForm = ({register, formErrors, serverErrors}) => {
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
                <input
                    type="text"
                    placeholder="slug"
                    {...register("slug")}
                />
            </div>
            <div className={`field ${formErrors.price && "error"}`}>
                <label>Price</label>
                <input
                    type="number"
                    {...register("price", {require: {value: true, message: "Price is required"}})}
                    step="0.01"
                />
            </div>
            <div className={`field ${formErrors.description && "error"}`}>
                <label>Description</label>
                <textarea placeholder="Service Description"{...register('description')}/>
            </div>
            <div className={`field ${formErrors.subcategory && "error"}`}>
                <label>Employee Category</label>
                <select className="ui fluid dropdown" {...register('subcategory', {required: {value: true, message: "Employee Category is required"}})}>
                    <option value="">Select Category</option>
                    <option value="electrician">Electrician</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="plumber">Plumber</option>
                    <option value="cleaner">Cleaner</option>
                    <option value="painter">Painter</option>
                    <option value="appliance">Appliance Expert</option>
                    <option value="pest-control">Pest-Control</option>
                    <option value="ac-service">AC Expert</option>
                </select>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" {...register('active')} />
                <label>Active</label>
                </div>
            </div>
            <div className={`ui red message ${formErrors.name || formErrors.price || formErrors.subcategory || formErrors.description || serverErrors ? "visible" : "hidden"}`}>
                    {formErrors.name?.message || formErrors.price?.message || formErrors.subcategory?.message || formErrors.description?.message || serverErrors}
            </div>
        </>
    )
}

export default createUpdateForm