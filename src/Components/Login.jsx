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

                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="FacebookLogo" />

                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ffacebook_logos%2Ffacebook_logos_PNG19749.png&f=1&nofb=1" alt="textLogo" />

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
