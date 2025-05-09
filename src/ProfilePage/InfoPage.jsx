import React from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import usePublicHook from "../Api/usePublicHook";
function InfoPage() {
  const { user, loading } = useAuthMangedHook();

  // show user name , email , number , like , follwer ,
  // set update option direct button
  const useaxiosapi = usePublicHook();
  console.log(user?.email);

  const { data: dataOfuser, isLoading } = useQuery({
    queryKey: ["data", user?.email],

    queryFn: async () => {
      const res = await useaxiosapi.get(`/find-userBy/${user?.email}`);
      console.log(res);
      return res.data;
    },
  });
  console.log(dataOfuser);
  const { country, fb, gender, number, Name ,Image} = dataOfuser;

  return (
    <div className="w-full ">
      {/* last login date */}

      <section className="flex justify-center flex-col items-center border gap-2">
        <div>
          <img
            src={Image || "not founed"}
            alt="Profile image"
            className="flex justify-center items-center mx-auto p-4 h-48 rounded"
          />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <p className="text-xl font-semibold"> Name : {Name}</p>

          <p className="text-xl font-semibold">Email : {user?.email}</p>
          <p className="text-xl">Number:{number}</p>
          <p className="text-xl">Country:{country}</p>
          <p className="text-xl">Gender:{gender}</p>
         <a href={fb}>
         <i class="ri-facebook-box-fill h-20 w-20 border text-3xl text-blue-500 rounded"></i>

         </a>
        </div>
        <Link className="btn btn-primary" to={"/profilepage/profileupdate"}>
          Update Now
        </Link>
      </section>
    </div>
  );
}

export default InfoPage;
