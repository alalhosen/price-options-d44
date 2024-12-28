import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
  const data = [
    { name: "Alice", math: 78, physics: 85, chemistry: 89 },
    { name: "Bob", math: 85, physics: 79, chemistry: 84 },
    { name: "Charlie", math: 92, physics: 91, chemistry: 95 },
    { name: "David", math: 74, physics: 76, chemistry: 80 },
    { name: "Emma", math: 88, physics: 84, chemistry: 90 },
    { name: "Fiona", math: 91, physics: 88, chemistry: 93 },
    { name: "George", math: 76, physics: 73, chemistry: 78 },
    { name: "Hannah", math: 82, physics: 85, chemistry: 87 },
    { name: "Ian", math: 89, physics: 90, chemistry: 92 },
    { name: "Jane", math: 95, physics: 94, chemistry: 97 },
  ];
  return (
    <div>
      <LChart width={500} height={400} data={data}>
        <Line dataKey="math"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
