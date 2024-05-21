"use client";

import DashPieChart from "./Piecharts";
import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'November',
    SemiAnalysis: 2890,
 
  },
  {
    date: 'December',
    SemiAnalysis: 2756,
  
  },
  {
    date: 'January',
    SemiAnalysis: 3322,
  
  },
  {
    date: 'February',
    SemiAnalysis: 3470,
 
  },
  {
    date: 'March',
    SemiAnalysis: 3475,

  },
  
];


const DashCards = (props: any) => {
  
  return (
    <div className="border-2 border-slate-100 p-5 bg-white pb-10 rounded-xl h-[50vh] mb-6">
      <div className="flex">
        <div className="w-3/4  p-4">
          <p className=" text-lg font-bold">Active Users</p>
          <p className=" text-sm font-medium text-slate-400">
            Monitor the number of users who have been interacting with the
            platform
          </p>
          <AreaChart
        className="mt-4 h-60"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SemiAnalysis']}
        colors={['cyan']}
      />

        </div>
        <div className="w-1/4 p-4">
          <DashPieChart/>
        </div>
      </div>
    </div>
  );
};

export default DashCards;
