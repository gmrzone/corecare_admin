const CreateUpdateForm = ({ register, formErrors }) => {
    return (
        <>
            <div className={`field ${formErrors.number && "error"}`}>
                <label>Number</label>
                <input
                    type="text"
                    placeholder="number"
                    {...register("number", {
                        required: { value: true, message: "Cannot create a employee without number" },
                        minLength: { value: 10, message: "Number cannot be less then 10 Char" },
                        maxLength: { value: 10, message: "Number cannot be greater then 10 Char" },
                        pattern: {
                            value: /^(7|8|9)[\d]{8}/,
                            message: "Invalid number. Please enter a valid number",
                        },
                    })}
                />
            </div>
            <div className={`field ${formErrors.password && "error"}`}>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="password"
                    {...register("password", {
                        required: { value: true, message: "Cannot create employee without password" },
                        minLength: { value: 5, message: "Password cannot be less then 5 char." },
                    })}
                />
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.first_name && "error"}`}>
                    <label>First Name</label>
                    <input type="text" placeholder="first_name" {...register('first_name', {required: {value: true, message: "First name is required"}})}/>
                </div>
                <div className={`field ${formErrors.last_name && "error"}`}>
                    <label>Last Name</label>
                    <input type="text" placeholder="last_name" {...register('last_name', {required: {value: true, message: "Last name is required"}})}/>
                </div>
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.username && "error"}`}>
                    <label>Username</label>
                    <input type="text" placeholder="username" {...register('username', {required: {value: true, message: "username is required"}})}/>
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
            </div>
            <div className={`field ${formErrors.email && "error"}`}>
                <label>Email</label>
                <input type="email" placeholder="email" {...register('email', {required: {value: true, message: "Email is required to create a Employee"}})}/>
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.address_1 && "error"}`}>
                    <label>Address 1</label>
                    <input type="text" placeholder="Address One" {...register('address_1', {required: {value: true, message: "Address one is required"}})}/>
                </div>
                <div className={`field ${formErrors.address_2 && "error"}`}>
                    <label>Address 2</label>
                    <input type="text" placeholder="Address Two" {...register('address_2', {required: {value: true, message: "Address two is required"}})}/>
                </div>
            </div>
            <div className="three fields">
                <div className={`field ${formErrors.city && "error"}`}>
                    <label>City</label>
                    <input type="text" placeholder="City" {...register('city', {required: {value: true, message: "Please Enter a city for Employee"}})}/>
                </div>
                <div className={`field ${formErrors.state && "error"}`}>
                    <label>State</label>
                    <input type="text" placeholder="State" {...register('state', {required: {value: true, message: "Please Enter a State for Employee"}})}/>
                </div>
                <div className={`field ${formErrors.pincode && "error"}`}>
                    <label>Pincode</label>
                    <input type="text" placeholder="Pincode" {...register('pincode', {required: {value: true, message: "Please Enter a zipcode for Employee"}})}/>
                </div>
            </div>
        </>
    );
};

export default CreateUpdateForm;
