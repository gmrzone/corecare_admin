import { useForm } from 'react-hook-form'
import OrderForm from './OrderForm'
const MainForm = () => {
    const {register, handleSubmit, formState: {errors: formErrors}} = useForm()
    const onSubmit = (formValues, e) => {
        e.target.reset()
        console.log(formValues)
    }
    return (
        <form className="ui large form" onSubmit={handleSubmit(onSubmit)}>
            <OrderForm register={register} formErrors={formErrors}/>
        </form>
    )
}

export default MainForm