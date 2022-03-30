import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/router'

export default function Navbar({ navCondition, withOutLogin }) {
    // console.log("is logged in" , isLoggedIn)
    // const [isLoggedIn, setIsLoggedIn] = useState(true)

    const { user, logout } = useAuth()
    const router = useRouter()

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li> */}
                {user ? (
                    <>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth">
                                <a onClick={() => {
                                    logout()
                                    router.push('/auth')
                                }}>Sign out</a>
                            </Link>
                        </li>
                    </>

                ) : (
                    <>
                        <li>
                            <Link href="/auth">
                                <a >Sign in</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/auth">
                                <a  >Sign out</a>
                            </Link>
                        </li> */}
                    </>
                )}



            </ul>
        </nav>
    )
}