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
                <label>Name</label>
                <input
                    type="text"
                    placeholder="slug"
                    {...register("slug")}
                />
            </div>
            <div className={`field ${formErrors.service_specialist && "error"}`}>
                <label>Employee Category</label>
                <select className="ui fluid dropdown" {...register('service_specialist', {required: {value: true, message: "Employee Category is required"}})}>
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
            <div className={`ui red message ${formErrors.name || formErrors.service_specialist || serverErrors ? "visible" : "hidden"}`}>
                    {formErrors.name?.message || formErrors.service_specialist?.message || serverErrors}
            </div>
        </>
    )
}

export default createUpdateForm