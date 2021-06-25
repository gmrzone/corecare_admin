
import style from '../../style/orderDetail.module.scss';
const OrderForm = ({ register, formErrors }) => {

    return (
        <div className={style['form-fields']}>
            <div className={`field ${formErrors.category && "error"}`}>
                <label>Employee Category</label>
                <select
                    className="ui fluid dropdown"
                    {...register("category", { required: { value: true, message: "Employee Category is required" } })}>
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
            <div className={`field ${formErrors.user && "error"}`}>
                <label>User</label>
                <select className="ui fluid dropdown" {...register("author", { required: { value: true, message: "Author is required" } })}>
                    <option value="">Select User</option>
                    <option value="afzal saiyed">Afzal Saiyed</option>
                    <option value="zaid shailh">Zaid Shaikh</option>
                    <option value="dalvi samar">Dalvi Samar</option>
                </select>
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.receipt && "error"}`}>
                    <label>Receipt</label>
                    <input
                        type="text"
                        placeholder="Receipt"
                        {...register("receipt", { required: { value: true, message: "Title is required" } })}
                    />
                </div>
                <div className={`field ${formErrors.razorpay_order_id && "error"}`}>
                    <label>Razorpay Order Id</label>
                    <input
                        type="text"
                        placeholder="Razorpay Order Id"
                        {...register("razorpay_order_id")}
                    />
                </div>
            </div>
            <div className="two fields">
                    <div className={`field ${formErrors.razorpay_payment_id && "error"}`}>
                        <label>Razorpay Payment Id</label>
                        <input
                            type="text"
                            placeholder="Razorpay Payment ID"
                            {...register("razorpay_payment_id")}
                        />
                    </div>
                    <div className={`field ${formErrors.razorpay_signature && "error"}`}>
                        <label>Razorpay Signature</label>
                        <input
                            type="text"
                            placeholder="Razorpay Signature"
                            {...register("razorpay_signature")}
                        />
                    </div>
            </div>
            <div className="two fields">
                    <div className={`field ${formErrors.subtotal && "error"}`}>
                        <label>Subtotal</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Subtotal"
                            {...register("subtotal")}
                        />
                    </div>
                    <div className={`field ${formErrors.tax && "error"}`}>
                        <label>Tax</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Tax"
                            {...register("tax")}
                        />
                    </div>
            </div>
            <div className="two fields">
                    <div className={`field ${formErrors.discount && "error"}`}>
                        <label>Discount</label>
                        <input
                            type="number" step="0.1"
                            placeholder="Discount"
                            {...register("discount")}
                        />
                    </div>
                    <div className={`field ${formErrors.total && "error"}`}>
                        <label>Total</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Total"
                            {...register("total")}
                        />
                    </div>
            </div>
            <div className={`field ${formErrors.coupon && "error"}`}>
                <label>Coupon</label>
                <select
                    className="ui fluid dropdown"
                    {...register("coupon")}>
                    <option value="">No Coupon</option>
                    <option value="corecr">CORECR</option>
                    <option value="newyear21">NEWYEAR21</option>
                    <option value="electro15">ELECTRO15</option>
                    <option value="cleaner15">CLEANER15</option>
                    <option value="plumber15">PLUMBER15</option>
                    <option value="carpenter15">CARPENTER15</option>
                    <option value="pest15">PEST15</option>
                    <option value="ac15">AC15</option>
                </select>
            </div>
            <div className="field">
                <div className="ui checkbox">
                    <input type="checkbox" {...register("paid")} />
                    <label>Paid</label>
                </div>
            </div>
        </div>
    )
};

export default OrderForm;
