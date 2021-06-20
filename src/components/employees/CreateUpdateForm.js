const CreateUpdateForm = () => {
    return (
        <form className={`ui form ${window.innerWidth > 768 && "large"}`}>
            <div class="field">
                <label>Number</label>
                <input type="text" placeholder="number" />
            </div>
            <div class="field">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div class="two fields">
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" placeholder="first_name" />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" placeholder="last_name" />
                </div>
            </div>
            <div class="two fields">
                <div class="field">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div class="field">
                    <label>Employee Category</label>
                    <select class="ui fluid dropdown">
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
            <div class="field">
                <label>Email</label>
                <input type="email" placeholder="email" />
            </div>
            <div class="two fields">
                <div class="field">
                    <label>Address 1</label>
                    <input type="text" placeholder="Address One" />
                </div>
                <div class="field">
                    <label>Address 2</label>
                    <input type="text" placeholder="Address Two" />
                </div>
            </div>
            <div class="three fields">
                <div class="field">
                <label>City</label>
                <input type="text" placeholder="City" />
                </div>
                <div class="field">
                <label>State</label>
                <input type="text" placeholder="State" />
                </div>
                <div class="field">
                <label>Pincode</label>
                <input type="text" placeholder="Pincode" />
                </div>
            </div>
        </form>
    )
}

export default CreateUpdateForm