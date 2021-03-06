import { useForm } from 'react-hook-form';
import OrderForm from './OrderForm';
import OrderItemForm from './OrderItemForm';
import { useState, useEffect } from 'react';
import WrapperWithHeading from './WrapperWithHeading';
import style from '../../style/orderDetail.module.scss';
import { useLocation } from 'react-router-dom'
const MainForm = ({ ItemCount=1 }) => {
    const history = useLocation()
    const path = history.pathname
    const {register, handleSubmit, setValue, formState: {errors: formErrors}} = useForm()
    useEffect(() => {
        if (path.match(/\/orders\/update\/\d{7}/)){
            setValue("category", 'electrician', {shouldValidate: false})
            setValue("user", 'afzal saiyed', {shouldValidate: false})
            setValue("razorpay_order_id", 'rzp_12356469584', {shouldValidate: false})
            setValue("razorpay_payment_id", 'rzp_py12356469584', {shouldValidate: false})
            setValue("razorpay_signature", 'rzp_sig12356469584', {shouldValidate: false})
            setValue("subtotal", 452.00, {shouldValidate: false})
            setValue("tax", 101.00, {shouldValidate: false})
            setValue("total", 500.00, {shouldValidate: false})
            setValue("coupon", 'newyear21', {shouldValidate: false})
            setValue("discount", 53.00, {shouldValidate: false})
            setValue("receipt", "ORD_1365478954156541", {shouldValidate: false})

            setValue('service', 'window ac service', {shouldValidate: false})
            setValue('quantity', 5, {shouldValidate: false})
            setValue('item_total', 553.00, {shouldValidate: false})
        }
    }, [path, setValue])
    const [orderItemCount, setOrderItemCount] = useState(ItemCount)
    const onSubmit = (formValues, e) => {
        e.target.reset()
        console.log(formValues)
    }
    const renderOrderItemForms = () => {
        const orderItems = []
        for (let i = 0; i < orderItemCount; i++){
            orderItems.push(
                    <OrderItemForm register={register} formErrors={formErrors} count={i + 1} key={i}/>

            )
        }
        return orderItems
    }
    return (
        <form className={`ui large form ${style["main-form"]}`} onSubmit={handleSubmit(onSubmit)}>
            <WrapperWithHeading heading="Order">
                <OrderForm register={register} formErrors={formErrors}/>
            </WrapperWithHeading>
            <div>
                <div className={style['order-item-header']}>
                    <h2>Order Items</h2>
                    <button type="button" className="ui button" onClick={() => setOrderItemCount(s => s+1)}>Add Order Item</button>
                </div>
                {renderOrderItemForms()}
            </div>
            <div className={style['action']}>
                <div className={style['delete-action']}>
                    <button className="negative ui button">Delete</button>
                </div>
                <div className={style['success-action']}>
                    <button className="ui secondary button">
                        Create
                    </button>
                    <button className="ui grey button">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default MainForm