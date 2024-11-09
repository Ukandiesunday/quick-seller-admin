import {
  areaChartData,
  linechartData,
  pieChartData,
} from "@/ApiServices/chartData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WidgetsOverview from "@/components/WidgetsOverview";

// const total = data.reduce((sum, entry) => sum + entry.value, 0);

const Overview = () => {
  return (
    <div className=" flex flex-col gap-[30px] w-full">
      <WidgetsOverview />

      {/* Line Chart */}
      <div className="w-full bg-white p-4 custom-rounded">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 pl-8">
          Statistics
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={linechartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Line
                type="monotone"
                dataKey="revenues"
                stroke="#22C55E"
                strokeWidth={3}
                dot={false}
                name="Revenues in profit"
              />
              <Line
                type="monotone"
                dataKey="vendorsUsers"
                stroke="#FBBF24"
                strokeWidth={3}
                dot={false}
                name="Vendor's Sales"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Chart */}
      <div className="flex w-full gap-[30px] items-center flex-wrap md:flex-nowrap">
        <div className="w-full bg-white custom-rounded overflow-hidden ">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800">
              Delivery Over Time
            </h2>
          </div>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={areaChartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="colorDeliveries"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="6.09%"
                        stopColor="#4EBA6F"
                        stopOpacity={1}
                      />
                      <stop
                        offset="71.04%"
                        stopColor="rgba(234, 255, 241, 0.3)"
                        stopOpacity={1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="deliveries"
                    stroke="#4EBA6F"
                    fill="url(#colorDeliveries)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* pie Chart*/}

        <Card className="w-full  h-[372px] md:h-full shadow-none border-none bg-white custom-rounded">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Users Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              {pieChartData.map((entry) => (
                <div key={entry.name} className="text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {entry.value.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{entry.name}</p>
                </div>
              ))}
            </div>
            <div className="h-[200px] flex md:h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        strokeWidth={0}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col mt-[50px] gap-2 ">
                {pieChartData.map((entry) => (
                  <div key={entry.name} className="flex items-center mx-2">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
