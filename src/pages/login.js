import LoginLayout from '../components/common/LoginLayout'
import LoginForm from '../components/login/LoginForm'
import style from '../style/login.module.scss'
const Login = () => {
    return (
        <LoginLayout>
            <div className={style['login-form-container']}>
                <LoginForm />
            </div>
        </LoginLayout>
    )
}

export default Login