"use client";

import * as React from "react";

import { getColumns } from "../getColumns";
import CustomTable from "./Table";

const CounsellorTable = () => {
  const columns = getColumns({ isUpcoming: false });

  return (
    <CustomTable
      columns={columns}
      title="All Counselor Assignments"
      subTitle="List of all active assignments"
      searchText="Search for a document"
      createAssignment={true}
    />
  );
};

export default CounsellorTable;
