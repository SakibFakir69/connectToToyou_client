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

  // Clean the data to remove any invalid or NaN values
  const cleanedData = data.filter(item => {
    return (
      item.Like !== null &&
      item.Like !== undefined &&
      !isNaN(item.Like) &&
      item.UnLike !== null &&
      item.UnLike !== undefined &&
      !isNaN(item.UnLike) &&
      item.Date !== null &&
      item.Date !== undefined
    );
  });


  if(isLoading)
  {
    return <div>
      <div className="py-20 text-center">
        
        <span className="loading loading-ring w-20"></span>
        <p>Dashboard Loading</p>

      </div>
    </div>
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
      

        <ComposedChart
          data={cleanedData}
    
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="PostName" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar  dataKey="Like" barSize={20} fill="#413ea0"/>

          <Bar  dataKey="UnLike" barSize={20} fill="red"/>
         
         

          <Line type="monotone"  />
        

       
          
   
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
