import React from "react";
import {useForm} from "react-hook-form";
import classes from'./Login.modules.css'
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Navigate} from "react-router-dom";



const LoginPage=(props)=>{

   const {
       register,
        formState:{errors, isValid},
       handleSubmit, reset,
   } = useForm({
       mode:"onBlur"
   });

   const onSubmit=(data)=>{
       props.login(data.email, data.password);
       reset();
    }

    if (props.isAuth) {
        return (
            <Navigate to={"/profile"}/>
        )
    }
    return (
        <div>
            <h1 className={classes.lable}>Войти</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.lable}>
                   Ваш email:
                    <input
                           className={classes.input}
                           {...register("email",{
                           required: "Поле обязательно для заполнения",
                           /*minLength: {
                            value: 5,
                               message: "Не более 5 символов"
                           }*/
                    })}
                    />
                </label>
                <div>{errors?.email&&<p>{errors?.email?.message || "Error"}</p>}</div>
                <label className={classes.lable}>
                   Ваш пароль:
                    <input
                           className={classes.input}
                           {...register("password",{
                           required: "Поле обязательно для заполнения",
                           minLength: {
                            value: 5,
                               message: "Не более 5 символов"
                           }
                    })}
                    />
                </label>
                <div>{errors?.password&&<p>{errors?.password?.message || "Error"}</p>}</div>
                <input type={"submit"}
                       disabled={!isValid}
                       onClick={handleSubmit}/>

            </form>

        </div>
    )
}

const mapStateToProps = (state)=>({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage);


