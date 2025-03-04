import React from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import { ToastContainer } from "react-toastify";

function ProfileUpdate() {
  const { user } = useAuthMangedHook();

  /// add locatin ,
  /// add link socail media
  ///

  // user can add number,location , add latest update date ,gender,fb

  const updateProfile = (event) => {
    event.preventDefault();

    const info = new FormData(event.target);
    const form_info = Object.fromEntries(info);
    console.log(form_info);

    const { number, name, gender, fb, email, country } = form_info;
    /// send put req

    






    
  };

  return (
    <div className="w-full bg-stone-200 min-h-screen">
      <h1>Update Form </h1>
      <ToastContainer/>

      <section className="w-full flex justify-center ">
        <form
          onSubmit={updateProfile}
          className="border md:w-1/2 w-10/11 bg-white p-3 rounded shadow-xl border-stone-200"
        >
          <div className="flex flex-col  w-full justify-center items-center">
            <img src={user?.photoURL} className="h-20 w-20 rounded-full" />
          </div>

          {/* img */}
          <div className="flex flex-col ">
            <span>Name</span>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              className=" py-2 rounded text-center   focus:shadow-[0_0_10px_red] "
            />
          </div>

          {/* email */}
          <div className="flex flex-col ">
            <span>Email</span>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your Enter your email"
              className=" py-2 rounded text-center   focus:shadow-[0_0_10px_red]"
            />
          </div>
          {/* number */}
          <div className="flex flex-col ">
            <span>Number</span>

            <input
              type="number"
              name="number"
              required
              placeholder="Enter your Number"
              className="py-2 rounded text-center   focus:shadow-[0_0_10px_red]"
            />
          </div>
          {/* location */}
          <div className="flex flex-col ">
            <span>Country</span>

            <input
              type="text"
              required
              name="country"
              placeholder="Enter your Name"
              className=" py-2 rounded text-center   focus:shadow-[0_0_10px_red]"
            />
          </div>
          {/* Gender */}
          <div className="flex flex-col w-2/5 ">
            <span>Gender</span>

            <select name="gender" id="" defaultValue={"Gender"} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Facebook Link */}
          <div className="flex flex-col ">
            <span>Enter Facebook link</span>

            <input
              type="url"
              name="fb"
              required
              placeholder="Enter your Facebook link"
              className=" py-2 rounded text-center   focus:shadow-[0_0_10px_red]"
            />
          </div>

          <div className="mt-6 ">
            <button className="btn btn-warning flex justify-center items-center mx-auto">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProfileUpdate;
