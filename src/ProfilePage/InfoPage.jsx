import React from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import { Link } from "react-router";
function InfoPage() {
  const { user, loading } = useAuthMangedHook();

  // show user name , email , number , like , follwer ,
  // set update option direct button

  return (
    <div className="w-full">
      {/* last login date */}

      <section className="flex justify-center flex-col items-center border">

        <div className=" border">
          <img
            src={user?.photoURL || "not founed"}
            alt="Profile image"
            className="flex justify-center items-center mx-auto p-4 w-full rounded-full"
          />
        </div>

        <div className="mt-5">
          <p>{user?.displayName}</p>

          <p>{user?.email}</p>
        </div>
        <Link className="btn btn-primary" to={'/profilepage/profileupdate'}>Update Now</Link>
      </section>
    </div>
  );
}

export default InfoPage;
