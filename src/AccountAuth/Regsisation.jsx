import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import AuthMangedHook from "../hook/AuthMangedHook";

import Lottie from "react-lottie";
import registationAnimation from "../../public/registation.json";

function Regsisation() {
  const Options = {
    loop: true,
    autoplay: true,
    animationData: registationAnimation,
  };

  const { userReg_Create_email_Password, userGoogle_login_handle, setloading } =
    AuthMangedHook();
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const googleRegisation_button = () => {
    setloading(true);
    try {
      userGoogle_login_handle()
        .then((result) => {
          const user = result.user;
          setloading(false);
        })
        .catch((error) => {
          console.log(`This error from Google reg page: ${error.code}`);
        });
    } catch (error) {
      console.log(error.name);
    }
    console.log("google");
  };

  const handleRegButtonSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const data = new FormData(event.target);
      const data_info = Object.fromEntries(data);
      const { name, email, password, repeat_password } = data_info;

      userReg_Create_email_Password(email, password)
        .then((result) => {
          const user = result.user;
          setloading(false);
          alert("Registration successful!");
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(`Error on registration page: ${error.code}`);
        });
    } catch (error) {
      console.log(error.name);
    }
  };

  return (
    <div
      className="bg-gradient-to-b  from-green-400 to-pink-300
    
    min-h-screen flex justify-center mx-auto w-full"
    >
      <section className="md:flex items-center">
        <div className="border border-l-stone-500/10 border-violet-500/20 flex-1 h-[580px] bg-gradient-to-bl from-red-300 to-teal-200 rounded">
          {/* logo */}
          <Lottie options={Options} />
        </div>

        {/* form */}
        <div className="border-2 border-teal-400/50 backdrop-blur-3xl flex-1 bg-black  rounded p-6">
          <form
            class=" w-full h-full p-3 flex justify-center flex-col "
            onSubmit={handleRegButtonSubmit}
          >
            <div className="-mt-4">
              <h2 className="text-white text-center text-4xl font-semibold flex justify-center gap-2">
                <span className="text-red-500 mb-4 ">Regsitation</span>
                Now{" "}
              </h2>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
            </div>
            {/* name */}

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm password
              </label>
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

            {/* google login */}
           
          </form>
          <section>
              <div className="divider divider-warning">
                <span className="text-white">or</span>
              </div>
            </section>

          <section className="flex justify-center flex-col border-white -mt-4 ">
            <button
              onClick={googleRegisation_button}
              href="#"
              class="flex text-center m-10 justify-center  text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 "
            >
              <div class=" py-2 px-10 mt-1 ">
                <svg class="w-6 h-6 " viewBox="0 0 40 40">
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
              </div>
              <span class=" px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </button>
            <div className="flex justify-center -mt-2">
              {/* info */}

              <p className="text-white">
                You have already account{" "}
                <NavLink to={"/account/login"} className={"text-green-400"}>
                  Login
                </NavLink>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Regsisation;
