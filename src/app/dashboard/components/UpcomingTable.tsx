"use client";

import * as React from "react";

import { getColumns } from "../getColumns";
import CustomTable from "./Table";

const UpcomingTable = () => {
  const columns = getColumns({ isUpcoming: true });

  return (
    <CustomTable
      columns={columns}
      title="Upcoming Appointments"
      searchText="Search by name"
    />
  );
};

export default UpcomingTable;
