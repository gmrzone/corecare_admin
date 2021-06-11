import style from '../../style/login.module.scss'
const LoginForm = () => {
    return (
        <>
            <form className={`ui big form ${style['login-form']}`}>
                <h1>Sign in</h1>
                <div className="field">
                    <label>Number</label>
                    <input type="text" name="first-name" placeholder="Number" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="last-name" placeholder="Password" />
                </div>
                <p>Forgot Password</p>
                <button className={style['login-button']} type="submit">
                    Login
                </button>
            </form>
            
            <div className={style['login-form-extra']}>
                <p>Not an admin? <a href="https://www.dev.corecare.in/">Login</a> to Corecare for Customers and Employees.</p>
            </div>
        </>
    )
}

export default LoginForm