import style from "../../style/login.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [formError, ] = useState(null);
    const onSubmit = (formData, e) => {
        //  reset form on submit
        e.target.reset();
    };
    return (
        <>
            <form className={`ui big form ${style["login-form"]}`} onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                <div className={`field ${errors.number && "error"}`}>
                    <label>Number</label>
                    <input
                        type="text"
                        placeholder="Number"
                        {...register("number", {
                            required: { value: true, message: "Cannot Login without number" },
                            minLength: { value: 10, message: "Number cannot be less then 10 Char" },
                            maxLength: { value: 10, message: "Number cannot be greater then 10 Char" },
                            pattern: {
                                value: /^(7|8|9)[\d]{8}/,
                                message: "Invalid number. Please enter a valid number",
                            },
                        })}
                    />
                </div>
                <div className={`field ${errors.password && "error"}`}>
                    <label>Password</label>
                    <input
                        type="text"
                        placeholder="Password"
                        {...register("password", {
                            required: { value: true, message: "Cannot login without a password" },
                            minLength: { value: 5, message: "Password cannot be less then 5 char." },
                        })}
                    />
                </div>
                <p>Forgot Password</p>
                {formError || errors?.number || errors?.password ? (
                    <div className="ui red message">{formError?.message || errors?.number?.message || errors?.password?.message}</div>
                ) : (
                    ""
                )}
                <button className={style["login-button"]} type="submit">
                    Login
                </button>
            </form>

            <div className={style["login-form-extra"]}>
                <p>
                    Not an admin? <a href="https://www.dev.corecare.in/login">Login</a> to Corecare for Customers and Employees.
                </p>
            </div>
        </>
    );
};

export default LoginForm;
