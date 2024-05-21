import { DonutChart, Legend } from "@tremor/react";

const sales = [
  {
    name: "Data (55GB)",
    sales: 55,
  },
  {
    name: "Other (45GB)",
    sales: 45,
  },
  {
    name: "Resourses (30GB)",
    sales: 30,
  },
  {
    name: "Available (80GB)",
    sales: 80,
  },
];

const colors = ["blue", "cyan", "indigo", "violet", "fuchsia"];
const categories = sales.map(sale => sale.name);

export default function DashPieChart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full">
      <div className="w-full md:w-3/5 p-2">
        <p className=" text-md font-bold">Storage</p>
        <p className=" text-md mb-10">80/200GB</p>
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          colors={colors}
          className="w-auto"
          showAnimation={true}
        />
      </div>
      <div className="w-full md:w-2/3 p-0">
        <Legend
          categories={categories}
          colors={colors}
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
