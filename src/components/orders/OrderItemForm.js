import style from '../../style/orderDetail.module.scss';
const OrderItemForm = ({ register, formErrors, count }) => {
    return (
        <div className={style['form-fields-order-item']}>
            <h3>Order Item {count}</h3>
            <div className={`field ${formErrors.service && "error"}`}>
                <label>Service</label>
                <select
                    className="ui fluid dropdown"
                    {...register("service")}>
                    <option value="">Select Service</option>
                    <option value="window ac service">Window AC Service</option>
                    <option value="wallpaper / stencils consultation">Wallpaper / Stencils Consultation</option>
                    <option value="wood polishing consultation">Wood Polishing Consultation</option>
                    <option value="drill and hang">Drill and Hang</option>
                    <option value="channel repair">Channel Repair</option>
                    <option value="ac switchbox installation">AC Switchbox Installation</option>
                    <option value="geyser installation">Geyser Installation</option>
                </select>
            </div>
            <div className="two fields">
                <div className={`field ${formErrors.service && "error"}`}>
                    <label>Quantity</label>
                    <input type="number" min="0" max="50" {...register('quantity')} />
                </div>
                <div className={`field ${formErrors.item_total && "error"}`}>
                    <label>Total</label>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Total"
                        {...register("item_total")}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderItemForm