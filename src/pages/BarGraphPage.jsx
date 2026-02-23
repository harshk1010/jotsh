import { useEffect, useState } from "react";
import { fetchEmployees } from "../api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function BarGraphPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEmployees().then((res) => {
      const top10 = res.slice(0, 10);
      setData(top10);
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#F4F6F8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <h2 style={{ color: "#222", marginBottom: 20 }}>Top 10 Salaries</h2>

      {/* Chart Container */}
      <div
        style={{
          width: "90%",
          maxWidth: 800,
          height: 400,
          background: "white",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />

            <XAxis
              dataKey="name"
              stroke="#333"
              tick={{ fontSize: 12, fill: "#333" }}
            />

            <YAxis
              stroke="#333"
              tick={{ fontSize: 12, fill: "#333" }}
            />

            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />

            <Bar
              dataKey="salary"
              fill="#007bff" 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
