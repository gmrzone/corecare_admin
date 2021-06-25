const createUpdateForm = ({ register, formErrors, serverErrors }) => {
    return (
        <>
            <div className={`field ${formErrors.user && "error"}`}>
                <label>User</label>
                <select className="ui fluid dropdown" {...register("user", { required: { value: true, message: "User is required" } })}>
                    <option value="">Select User</option>
                    <option value="afzal saiyed">Afzal Saiyed</option>
                    <option value="zaid shailh">Zaid Shaikh</option>
                    <option value="dalvi samar">Dalvi Samar</option>
                </select>
            </div>
            <div className={`field ${formErrors.post && "error"}`}>
                <label>Post</label>
                <select className="ui fluid dropdown" {...register("post", { required: { value: true, message: "Post is required" } })}>
                    <option value="">Select Post</option>
                    <option value="nuxt auth loginwith function doesn't send data to drf">
                        Nuxt Auth loginWith function doesn't send data to DRF
                    </option>
                    <option value="luxury bathrooms: steal these 7 clever (and practical!) ideas">
                        Luxury Bathrooms: Steal These 7 Clever (And Practical!) Ideas
                    </option>
                    <option value="vastu for toilets & bathrooms: 5+ helpful tips for your indian home">
                        Vastu for Toilets & Bathrooms: 5+ Helpful Tips for Your Indian Home
                    </option>
                    <option value="7 ways cctvs might disappoint you">7 Ways CCTVs Might Disappoint You</option>
                    <option value="top 5 things to consider while hiring a cctv camera dealer">
                        Top 5 Things to Consider While Hiring A CCTV Camera Dealer
                    </option>
                </select>
            </div>
            <div className={`field ${formErrors.comment && "error"}`}>
                <label>Comment</label>
                <textarea
                    placeholder="Comment"
                    {...register("comment", {
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
export default createUpdateForm;
