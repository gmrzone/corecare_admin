import { useForm } from 'react-hook-form'
import OrderForm from './OrderForm'
import OrderItemForm from './OrderItemForm'
const MainForm = () => {
    const {register, handleSubmit, formState: {errors: formErrors}} = useForm()
    const onSubmit = (formValues, e) => {
        e.target.reset()
        console.log(formValues)
    }
    return (
        <form className="ui large form" onSubmit={handleSubmit(onSubmit)}>
            <OrderForm register={register} formErrors={formErrors}/>
            <OrderItemForm register={register} formErrors={formErrors}/>
            <div className="">
                <button className="ui secondary button">
                    Create
                </button>
                <button className="negative ui button">Delete</button>
                <button className="ui grey button">Cancel</button>
            </div>
        </form>
    )
}

export default MainForm