import DatePicker from '../common/DatePicker'
const CreateUpdateForm = ({register , formErrors, serverErrors, couponValidity, setCouponValidity }) => {
    return (
        <>
            <div className={`field ${formErrors.CODE && "error"}`}>
                <label>CODE</label>
                <input
                    type="text"
                    placeholder="Coupon Code"
                    {...register("CODE", {
                        required: { value: true, message: "Cannot create or update Coupon without Coupon Code" },
                        minLength: { value: 4, message: "Number cannot be less then 4 Char" },
                        maxLength: { value: 10, message: "Number cannot be greater then 10 Char" },
                        pattern: {
                            value: /[A-Z_-]{4,}/,
                            message: "Invalid Coupon Code",
                        },
                    })}
                />
            </div>
            <div className={`field ${formErrors.discount && "error"}`}>
                <label>discount</label>
                <input
                    type="number"
                    placeholder="Discount %"
                    min="0"
                    max="100"
                    {...register("discount", {
                        required: { value: true, message: "Cannot create a Coupon without discount" },
                    })}
                />
            </div>
            <div className={`field ${formErrors.category && "error"}`}>
                <label>Employee Category</label>
                <select className="ui fluid dropdown" {...register('category', {required: {value: true, message: "Employee Category is required"}})}>
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
            <div className="two fields">
                <div className={`field ${formErrors.first_name && "error"}`}>
                    <label>Valid From</label>
                    <DatePicker />
                </div>
                <div className={`field ${formErrors.last_name && "error"}`}>
                    <label>Valid To</label>
                    <DatePicker />
                </div>
            </div>  
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" {...register('is_active')}/>
                <label>Is Active</label>
                </div>
            </div>
            <div className={`ui red message ${formErrors.CODE || formErrors.discount || formErrors.category || serverErrors ? "visible" : "hidden"}`}>
                    {formErrors.CODE?.message || formErrors.discount?.message || formErrors.category?.message || serverErrors}
            </div>
        </>
        )   
}

export default CreateUpdateForm