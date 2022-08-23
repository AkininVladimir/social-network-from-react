import React from "react";
import {useForm} from "react-hook-form";
import classes from'./Login.modules.css'


const LoginPage=()=>{

   const {
       register,
        formState:{errors, isValid},
       handleSubmit,
       reset,
   } = useForm({
       mode:"onBlur"
   });

   const onSubmit=(data)=>{
       alert(JSON.stringify(data));
       reset();
    }

    return (
        <div>
            <h1 className={classes.lable} htmlFor={"login"}>Войти</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.lable}>
                   Имя пользователя:
                    <input
                           className={classes.input}
                           {...register("Login",{
                           required: "Поле обязательно для заполнения",
                           /*minLength: {
                            value: 5,
                               message: "Не более 5 символов"
                           }*/
                    })}
                    />
                </label>
                <div>{errors?.Login&&<p>{errors?.Login?.message || "Error"}</p>}</div>
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


export default LoginPage;

/*
const LoginPage = (props) => {

    const validationsSchema = Yup.object().shape({
        name: Yup.string().typeError('Должна быть строка').required('Обязательно к заполнению')

    });

    const loginForm =(values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty) =>{
        return (
            <>
                <div>
                    <h1>Зарегистрировать свой аккаунт</h1>
                </div>

                    <p>Имя</p>
                    <input type={"text"} name={values.name} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder={`Ваше имя`}/>

                {touched.name && errors.name && <p>{errors.name}</p>}
                <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={`submit`}>Зарегистрировать
                </button>
            </>
        )
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    login: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: ''
                }
            }
                validateOnBlur /!*метод для валидации при переходе на другое поле формы*!/
                onSubmit={(values) => {console.log(values)}} /!*метод ля вызова функции при отправки формы*!/
                validationsSchema={validationsSchema}
            >{loginForm}
            </Formik>
        </div>

    );
}
*/




/*<Formik

>{
    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <Form>
            <div>
                <h1>Зарегистрировать свой аккаунт</h1>
            </div>
            <div>
                <p>Имя</p>
                <input type="text" name={`name`} onChange={handleChange} onBlur={handleBlur}
                       value={values.name}/>
            </div>
            {touched.name && errors.name && <p>{errors.name}</p>}

            <div>
                <p>Фамилия</p>
                <input type="text"/>
            </div>
            <div>
                <p>E-mail</p>
                <input type="text" placeholder="yourname@gmail.com"/>
            </div>
            <div>
                <p>Пароль</p>
                <input type="text" placeholder="Пароль"/>
            </div>
            <div>
                <input type={"checkbox"}/> Запомнить меня?
            </div>

            <button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={`submit`}>Зарегистрировать
            </button>
            <div>
                <p>Забыли пароль?</p>
                <a><p>Зарегистрироваться через Facebook</p></a>
            </div>
        </Form>
    )} {/!*пердаем children*!/}
</Formik>*/
