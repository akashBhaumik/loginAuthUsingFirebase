import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const ProtectedAuth = ({ children }) => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            // toast.warning('Please select sign out button first');
            router.push('/')
        }
    }, [router, user])

    return <>{user ?   null : children  }</>
}

export default ProtectedAuth