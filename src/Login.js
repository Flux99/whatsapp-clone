import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css";
import {auth , provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionsTypes } from './reducer';




function Login() {

    const [{},dispatch] = useStateValue();

   const signIn=()=>{
    auth
    .signInWithPopup(provider)
    .then((result)=>{
        dispatch({
            type:actionsTypes.SET_USER,
            user:result.user,
        });
    })
    .catch((error)=> alert(error.message));
   };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://www.solvemix.com/images/Smartphones/WhatsApp.jpg"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button  onClick={signIn}>
                   <h1> Sign in Google</h1>
                </Button>
            </div>
        </div>
    );
}

export default Login;
