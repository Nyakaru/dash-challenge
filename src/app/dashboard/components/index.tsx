

import { ChevronLeftIcon } from "@radix-ui/react-icons"
import DashCards from "./Dashcards";
import UpcomingTable from "./UpcomingTable";
import CounsellorTable from "./CounsellorTable";

const DashBoard = () => {
  return (
    <>
      <div className="container mx-auto mt-4 w-full bg-slate-100 h-full mb-4 p-2">
        <div className="p-3 rounded">
          <p className="flex items-center space-x-1 text-black hover:underline cursor-pointer">
            <ChevronLeftIcon className="h-5 w-5" />
            <span>Back</span>
          </p>
        </div>

        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black mb-4">
            Home
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
            Here&apos;s your organization at a glance
          </p>
        </div>

        <div>
          <DashCards />
        </div>
        <div>
          <UpcomingTable />
        </div>
        <div className="mt-6">
          <CounsellorTable />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
