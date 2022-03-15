
import React, { useState } from "react"
import styles from '../styles/Auth.module.css'
import Title from "../components/Title";
import SignInForm from "../components/SignInForm";


export default function Auth() {

    return (
        <>
            <Title title="Authentication page" />

            <main className="vh-50 d-flex justify-content-center align-items-center">
                <SignInForm />

            </main>

        </>
    )
}