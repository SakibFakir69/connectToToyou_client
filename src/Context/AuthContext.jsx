




import React, { createContext, useEffect, useState } from 'react'
import { Auth } from '../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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

    // logout 

    const handel_log_out = ()=>{
        return signOut(Auth);
    }

    useEffect(()=>{

        const unscribe = onAuthStateChanged(Auth, (currentUser)=>{
            if(currentUser)
            {
                setloading(true);
                setuser(currentUser);
            }
            setloading(false);

        })

        return unscribe;

    },[])



    const authInfo = {
        user , loading , setloading, setuser,userReg_Create_email_Password,userGoogle_login_handle
        ,LoginWith_email_ans_password_handle,Login_with_Google_handle,handel_log_out
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