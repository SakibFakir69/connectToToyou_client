import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook from "../Api/usePublicHook";

import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";

function Dashboard() {
  let { user } = useAuthMangedHook();
  const useaxiosapi = usePublicHook();

  const { data: data = [], isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await useaxiosapi.get(`/manage-post/${user?.email}`);
      return res.data;
    },
  });

  console.log(data);

  // const sanitizedData = data.map(item => ({
  //   ...item,
  //   Name: item.Name || 'Unknown',  // Replace null Name with 'Unknown'
  //   Message: item.Message || 'No message available',  // Replace null Message with default text
  // }));


  if (isLoading) {
    return (
      <div>
        <div className="py-20 text-center">
          <span className="loading loading-ring w-20"></span>
          <p>Dashboard Loading</p>
        </div>
      </div>
    );
  }

  if(data.length==0){
    return (
      <div className=" w-full py-20 ">
        <div className="border flex justify-center items-center">
        <p>No Data founed</p>
        </div>
      </div>
    )
  }
  console.log(data);

  return (
    <div className="absolute overflow-hidden   -z-50 max-wd-full w-10/11">
      <ResponsiveContainer width="80%" height={500}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="Like" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="Like" barSize={20} fill="#413ea0" />

          <Bar dataKey="UnLike" barSize={20} fill="red" />
          <Line dataKey={"Like"} type={"monotone"}/>

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
