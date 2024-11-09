import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { month: "Jan", completed: 600, canceled: 400 },
  { month: "Feb", completed: 700, canceled: 300 },
  { month: "Mar", completed: 900, canceled: 400 },
  { month: "Apr", completed: 800, canceled: 450 },
  { month: "May", completed: 1000, canceled: 300 },
  { month: "Jun", completed: 950, canceled: 200 },
  { month: "Jul", completed: 800, canceled: 400 },
  { month: "Aug", completed: 850, canceled: 300 },
  { month: "Sep", completed: 950, canceled: 400 },
  { month: "Oct", completed: 700, canceled: 400 },
  { month: "Nov", completed: 850, canceled: 600 },
  { month: "Dec", completed: 900, canceled: 400 },
];

const BarChartComponent = () => {
  return (
    <Card className="w-full border-none mt-8 p-4 custom-rounded bg-white">
      <CardHeader>
        <CardTitle>Order Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={10}
            >
              <CartesianGrid strokeDasharray="2 2" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 200, 400, 600, 800, 1000, 1200]}
                domain={[0, 1200]}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                }}
              />
              <Legend
                align="right"
                verticalAlign="top"
                iconType="circle"
                wrapperStyle={{ paddingBottom: "20px" }}
              />
              <Bar
                dataKey="completed"
                fill="#4EBA6F"
                radius={[20, 20, 20, 20]}
                name="Completed"
              />
              <Bar
                dataKey="canceled"
                fill="#C8EAD2"
                radius={[20, 20, 20, 20]}
                name="Canceled"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartComponent;
