import { useForm } from 'react-hook-form'
import OrderForm from './OrderForm'
import OrderItemForm from './OrderItemForm'
import WrapperWithHeading from './WrapperWithHeading'
import style from '../../style/orderDetail.module.scss';
const MainForm = () => {
    const {register, handleSubmit, formState: {errors: formErrors}} = useForm()
    const onSubmit = (formValues, e) => {
        e.target.reset()
        console.log(formValues)
    }
    return (
        <form className={`ui large form ${style["main-form"]}`} onSubmit={handleSubmit(onSubmit)}>
            <WrapperWithHeading heading="Order Detail">
                <OrderForm register={register} formErrors={formErrors}/>
            </WrapperWithHeading>
            <WrapperWithHeading heading="Order Items">
                <OrderItemForm register={register} formErrors={formErrors}/>
            </WrapperWithHeading>
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