import React from "react";
import { Link, NavLink } from "react-router";
import useAuthMangedHook from "../hook/useAuthMangedHook";

function NavbarPage() {
  const { setloading, setuser ,handel_log_out,user} = useAuthMangedHook();
  console.log(user);


  const hadel_log_out_button = ()=>{
    setloading(true);
    handel_log_out()
    .then((result)=>{
      setloading(false)
      setuser(null);

    })
    .catch((error)=>{
      console.log(error.name)
    })
  }

  


  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/post"}>Post</NavLink>
      </li>
      <li>
        <NavLink to={"/new-post"}>New post</NavLink>
      </li>

      <li>
        <NavLink to={"/create-post"}>Create post</NavLink>
      </li>
      <li>
        <NavLink to={"/all-users"}>All Users</NavLink>
      </li>
      <li>
        <NavLink to={"/mangepost"}>Mange Post</NavLink>
      </li>

      <li className="md:invisible">
        <NavLink to={'/profilepage'}>Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="text-stone-200">
      <div className="navbar border fixed top-0 z-50  bg-violet-600/90 backdrop-blur-md ">

        <div className="navbar-start ">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link to={'/'} className="btn-ghost text-2xl font-bold">ConenctToyou</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-0">{links}</ul>
        </div>
        <div className="navbar-end">

          {
            user ? (<div className="flex gap-4 justify-center items-center">

              <Link to={'profilepage'}>
              <img src={user.photoURL || "Not Founed"} className="h-10 w-10 rounded-full"/>
                
              </Link>

              <button className="btn" onClick={hadel_log_out_button}>Log out</button>


            </div>) :
            
            (<div>
               <Link to={"/account/login"} className="btn">
            Log in{" "}
          </Link>

            </div>)
          }

         

        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
