import Link from "next/link";
import React, { useState } from "react";
export default function Navbar({ navCondition, withOutLogin }) {

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
                <li>
                    <Link href="/auth">
                        <a>Sign in</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}