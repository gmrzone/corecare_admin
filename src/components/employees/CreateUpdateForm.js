const CreateUpdateForm = () => {
    return (
        <>
            <div className="field">
                <label>Number</label>
                <input type="text" placeholder="number" />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="two fields">
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" placeholder="first_name" />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" placeholder="last_name" />
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="field">
                    <label>Employee Category</label>
                    <select className="ui fluid dropdown">
                    <option value="">Select Category</option>
                    <option value="AL">Electrician</option>
                    <option value="AK">Carpenter</option>
                    <option value="AZ">Plumber</option>
                    <option value="AR">Cleaner</option>
                    <option value="AL">Painter</option>
                    <option value="AK">Appliance Expert</option>
                    <option value="AZ">Pest-Control</option>
                    <option value="AR">AC Expert</option>
                    </select>
                </div>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="email" placeholder="email" />
            </div>
            <div className="two fields">
                <div className="field">
                    <label>Address 1</label>
                    <input type="text" placeholder="Address One" />
                </div>
                <div className="field">
                    <label>Address 2</label>
                    <input type="text" placeholder="Address Two" />
                </div>
            </div>
            <div className="three fields">
                <div className="field">
                <label>City</label>
                <input type="text" placeholder="City" />
                </div>
                <div className="field">
                <label>State</label>
                <input type="text" placeholder="State" />
                </div>
                <div className="field">
                <label>Pincode</label>
                <input type="text" placeholder="Pincode" />
                </div>
            </div>
        </>
    )
}

export default CreateUpdateForm