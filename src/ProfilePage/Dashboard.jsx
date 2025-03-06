import { useQuery } from "@tanstack/react-query";
import React from "react";
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
    queryKey: ["data",user?.email],
    queryFn: async () => {
      const res = await useaxiosapi.get(`/manage-post/${user?.email}`);

      return res.data;
    },
  });
  console.log("dashboard", data);

  return (
    <div>
      <ComposedChart
        width={500}
        height={500}
        data={data}
        className="border"
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="Date" scale="band" />
        <YAxis dataKey={"Like"} />

        <Tooltip />
        <Legend />
        <Bar dataKey="Like" barSize={20} fill="#413ea0" />

        <Line
          type="monotone"
          dataKey="UnLike"
          stroke="#ff7300"
        />
      </ComposedChart>
    </div>
  );
}

export default Dashboard;
