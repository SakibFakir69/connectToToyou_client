import React from "react";
import useAuthMangedHook from "./useAuthMangedHook";
import { useQuery } from "@tanstack/react-query";
import usePublicHook from "../Api/usePublicHook";
function LoginUser() {
  const { user } = useAuthMangedHook();
  const useaxiosapi = usePublicHook();

  const { data: dataOfuser=[], isLoading } = useQuery({
    queryKey: ["data", user?.email],

    queryFn: async () => {
      const res = await useaxiosapi.get(`/find-userBy/${user?.email}`);
      console.log(res);
      return res.data;
    },
  });

  return { dataOfuser, isLoading };
}

export default LoginUser;
