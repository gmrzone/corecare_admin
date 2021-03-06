const CreateUpdateUserForm = ({ formErrors, register, serverErrors }) => {
    return (
        <>
            <div className={`field ${formErrors.number && "error"}`}>
                <label>Number</label>
                <input
                    type="text"
                    placeholder="number"
                    {...register("number", {
                        required: { value: true, message: "Cannot create a user without number" },
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
                        required: { value: true, message: "Cannot create or update user without password" },
                        minLength: { value: 5, message: "Password cannot be less then 5 char." },
                    })}
                />
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.first_name && "error"}`}>
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="first_name"
                        {...register("first_name", { required: { value: true, message: "First name is required" } })}
                    />
                </div>
                <div className={`field ${formErrors.last_name && "error"}`}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="last_name"
                        {...register("last_name", { required: { value: true, message: "Last name is required" } })}
                    />
                </div>
            </div>
            <div className={`field ${formErrors.username && "error"}`}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="username"
                    {...register("username", { required: { value: true, message: "username is required" } })}
                />
            </div>
            <div className={`field ${formErrors.email && "error"}`}>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                        required: { value: true, message: "Please enter a email address" },
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                            message: "Please Enter a valid Email Address",
                        },
                    })}
                />
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.address_1 && "error"}`}>
                    <label>Address 1</label>
                    <input
                        type="text"
                        placeholder="Address One"
                        {...register("address_1", { required: { value: true, message: "Address one is required" } })}
                    />
                </div>
                <div className={`field ${formErrors.address_2 && "error"}`}>
                    <label>Address 2</label>
                    <input
                        type="text"
                        placeholder="Address Two"
                        {...register("address_2", { required: { value: true, message: "Address two is required" } })}
                    />
                </div>
            </div>
            <div className="three fields">
                <div className={`field ${formErrors.city && "error"}`}>
                    <label>City</label>
                    <input
                        type="text"
                        placeholder="City"
                        {...register("city", { required: { value: true, message: "Please Enter a city for Employee" } })}
                    />
                </div>
                <div className={`field ${formErrors.state && "error"}`}>
                    <label>State</label>
                    <input
                        type="text"
                        placeholder="State"
                        {...register("state", { required: { value: true, message: "Please Enter a State for Employee" } })}
                    />
                </div>
                <div className={`field ${formErrors.pincode && "error"}`}>
                    <label>Pincode</label>
                    <input
                        type="text"
                        placeholder="Pincode"
                        {...register("pincode", {
                            required: { value: true, message: "Please Enter a zipcode for Employee" },
                            minLength: { value: 6, message: "Pincode need to be exactly 6 characters" },
                            maxLength: { value: 6, message: "Pincode need to be exactly 6 characters" },
                        })}
                    />
                </div>
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input type="checkbox" {...register("verified")} />
                    <label>Is Verified</label>
                </div>
            </div>
            <div
                className={`ui red message ${
                    formErrors.number ||
                    formErrors.password ||
                    formErrors.first_name ||
                    formErrors.last_name ||
                    formErrors.username ||
                    formErrors.email ||
                    formErrors.address_1 ||
                    formErrors.address_2 ||
                    formErrors.city ||
                    formErrors.state ||
                    formErrors.pincode ||
                    serverErrors
                        ? "visible"
                        : "hidden"
                }`}>
                {formErrors.number?.message ||
                    formErrors.password?.message ||
                    formErrors.first_name?.message ||
                    formErrors?.last_name?.message ||
                    formErrors.username?.message ||
                    formErrors.email?.message ||
                    formErrors.address_1?.message ||
                    formErrors.address_2?.message ||
                    formErrors.city?.message ||
                    formErrors.state?.message ||
                    formErrors.pincode?.message ||
                    serverErrors}
            </div>
        </>
    );
};

export default CreateUpdateUserForm;
