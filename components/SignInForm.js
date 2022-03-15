import Link from "next/link";
import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { signIn, signUp } from "../services/apiConfig";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Auth.module.css'
toast.configure()

export default function SignInForm() {
    const router = useRouter();
    console.log("router ==", router)
    const [auth, setAuth] = useState(true)
    const [navCondition, setNavCondition] = useState(false)
    // const [withOutLogin, setwithOutLogin] = useState(true)
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => {
        setAuth(true)
        console.log(data);
        if (!auth) {
            console.log("sign up clicked")
            signUp(data).then((response) => {
                response &&
                    response?.status === 200 &&
                    toast.success('successfully signed up');
                setValue("email", " ")
                setValue("password", " ")
                console.log("user details = ", data)
            })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("sign in clicked")
            signIn(data).then((response) => {
                response &&
                    response?.status === 200 &&
                    router.push(router.query.returnUrl || '/about');

                console.log("user log in successfully = ", data)
                toast.success('users signed in successfully');


            })
                .catch((error) => {
                    console.log(error);
                    toast.error('plese entered currect password');
                    // setValue("email", " ")
                    // setValue("password", " ")
                });
        }
    }
    return <div className={styles.login_box + ' p-3'}>
        <hr />
        <hr />
        <h1 className="display-6 mb-3">{auth ? "Sign in" : "Sign up"}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
                <label>User name :  </label>
                <input {...register("email", { required: true, maxLength: 20 })} placeholder="username" /><br /><br />
            </div>
            <div className="mb-2">
                <label>password :  </label>
                <input {...register("password", { required: true, })} placeholder="password" /><br /><br />
            </div>
            {auth ?
                < button type="submit" className="btn btn-primary">Sign in </button>
                :
                < button type="submit" className="btn btn-primary" >Sign up </button>
            }
        </form>
        <p>Click here to
            <Link href="/auth" >
                <a onClick={() => setAuth(false)} >Sign up</a>
            </Link>
        </p>
        <hr />
        <hr />
    </div>
}