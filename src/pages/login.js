import LoginLayout from "../components/common/LoginLayout";
import LoginForm from "../components/login/LoginForm";
import style from "../style/login.module.scss";
const Login = () => {
    return (
        <LoginLayout>
            <div className={style["login-form-container"]}>
                <div className={style["logo-container"]}>
                    <img src="/logo-mobile-black.svg" alt="logo" />
                    <div className={style.text}>Admin Login</div>
                </div>
                <LoginForm />
            </div>
        </LoginLayout>
    );
};

export default Login;
