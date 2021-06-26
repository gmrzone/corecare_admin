import { useForm } from 'react-hook-form'
import OrderForm from './OrderForm'
import OrderItemForm from './OrderItemForm'
import {useState} from 'react';
import WrapperWithHeading from './WrapperWithHeading'
import style from '../../style/orderDetail.module.scss';
const MainForm = ({ ItemCount=1 }) => {
    const {register, handleSubmit, formState: {errors: formErrors}} = useForm()
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