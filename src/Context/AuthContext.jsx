




import React, { createContext, useState } from 'react'
import { Auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// now create context then use

export const MYContext = createContext();


function AuthContext({children}) {

    // manage auth and authncation

    const [ loading , setloading ] = useState(true);
    const [ user , setuser ] = useState(null);



    // create password login 

    const userReg_Create_email_Password = (email , password) =>{
        return createUserWithEmailAndPassword(Auth, email , password);

    }
    // create google sinup 
    const Provider = new GoogleAuthProvider();
    const userGoogle_login_handle = () =>{
        return signInWithPopup(Auth,Provider);

    }

    // Login 


    const LoginWith_email_ans_password_handle = (email , passsword)=>{
        return signInWithEmailAndPassword(Auth,email,passsword)

    }
    const Login_with_Google_handle = () =>{
        return signInWithPopup(Auth,Provider);
    }



    const authInfo = {
        user , loading , setloading, setuser,userReg_Create_email_Password,userGoogle_login_handle
        ,LoginWith_email_ans_password_handle,Login_with_Google_handle
    }



  return (
    <div>
        <MYContext.Provider value={authInfo}>
            {/* passing compnenent */}
            {children}
        </MYContext.Provider>


    </div>
  )
}

export default AuthContext