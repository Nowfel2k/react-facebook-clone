import { Button } from '@material-ui/core'
import React from 'react'
import '../Styles/Login.css'

import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'



function Login() {

    const [{ user }, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

                console.log(result)
            }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">

                <img src="https://lh3.googleusercontent.com/proxy/51QQHuXhTmUbXd2_UvE8IfYvdiLMkAdZt4--fRSocXcucmCMO6wwkbcmRwVLntYcPQgMfKO4P0Ik5S_SedrTj4oWIE6dth3SRXx6-epH9tG5MB1QMMIPgsVZ63-amgOQh0UHI9rad1zWi8Nc" alt="FacebookLogo" />

                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="textLogo" />

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
