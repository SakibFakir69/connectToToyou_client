import React, { useState, useSyncExternalStore } from "react";

import "./account.css";

import LottieLoginAnimation from "../../public/Animation - 1738435419733.json";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook from "../Api/usePublicHook";

function Login() {
  const useaxiosPublic = usePublicHook();

  const {
    LoginWith_email_ans_password_handle,
    Login_with_Google_handle,
    setloading,
    setuser,
  } = useAuthMangedHook();

  const goHome = useNavigate();

  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: LottieLoginAnimation,
  };

  //   handle form

  const handleLoginFormSubmit = (event) => {
    const [error, seterror] = useState("");
    // add google user
    /// add to databse
    // password validation

    event.preventDefault();
    const form_info = new FormData(event.target);
    const form_data = Object.fromEntries(form_info);
    const { email, password } = form_data;
    console.log({ email, password });
    setloading(true);

    LoginWith_email_ans_password_handle(email, password)
      .then((result) => {
        setloading(false);
        const user = result.users;
        setuser(user);
        goHome("/");
      })
      .catch((error) => {
        console.log("this error from login page", error.name);
        seterror(error.message);
      });

    // google login fomrm

   
  };
  const Login_in_with_google_handle = () => {
    setloading(true);
    Login_with_Google_handle()
      .then((result) => {

        setloading(false);
        const user = result.users;
        setuser(user);
        goHome("/");
      })
      .catch((error) => {
        console.log(` we founed error on google login page `, error.code);
      });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-teal-500  flex justify-center py-10  w-full min-h-screen ">
      <section class="hover:border-2 hover:border-teal-300/30  md:flex   backdrop-blur-md bg-black transform transition delay-100  border-2 min-h-screen w-10/11 rounded-2xl  ">
        <div className="flex-1  text-center bg-stone-100">
          <div className="rounded-xl">
            <Lottie options={animationOption} className="rounded-2xl" />
          </div>
        </div>

        <div className="flex-1   text-white  p-2  md:mt-16">
          <form className=" py-10" onSubmit={handleLoginFormSubmit}>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Email :{" "}
              </label>

              <input
                className="sm:py-3 py-2 text-center   hover:outline-blue-900  focus:outline-2 rounded-md border-violet-500"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {/* password */}
            <div className="flex flex-col mb-2 md:py-4">
              <label htmlFor="" className="font-semibold">
                Password :{" "}
              </label>

              <input
                className="sm:py-3 py-2 text-center border-indigo-500 focus:outline-2 rounded-md

                hover:outline-blue-900
                
                "
                name="password"
                type="passsword"
                placeholder="Enter your email"
              />

              {/* button */}

              <button type="submit" className="btn mt-4">
                {" "}
                Login
              </button>
            </div>
          </form>

          <div className="divider divider-success">
            <span>or</span>
          </div>
          <div className="">
            <button
              onClick={Login_in_with_google_handle}
              class="flex items-center 

              mx-auto
              
              
              justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <svg class="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span class="mx-2" >Sign in with Google</span>
            </button>

            {/* no account */}
            <div className="text-center mt-4">
              <p>
                I have not account{" "}
                <Link to={"/account/regisation"} className="text-green-300">
                  Register Now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
