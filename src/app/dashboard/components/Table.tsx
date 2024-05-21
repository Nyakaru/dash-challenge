"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/table";
import { sampleData } from "../mock";

interface ITableProps {
  columns: ColumnDef<any>[];
  title: string;
  subTitle?: string;
  searchText: string;
  createAssignment?: boolean;
}

const CustomTable = ({ columns, title, subTitle, searchText, createAssignment }: ITableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: sampleData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <>
      <div className="w-full h-full bg-white p-2 mt-4 ">
        <div className="flex items-center py-4 justify-between">
          <div className="flex-1 mr-4">
            <h3 className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-black font-bold mb-1">
                {title}
            </h3>
            {subTitle && (<p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
                {subTitle}
            </p>
            )}
          </div>
          <div className="flex-grow">
            <Input
              placeholder={searchText}
              value={
                (table.getColumn("counsellor")?.getFilterValue() as string) ??
                ""
              }
              //@ts-ignore
              onChange={(event) =>
                table
                  .getColumn("counsellor")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
          >
            <MixerHorizontalIcon className=" h-4 w-4" />
            Filter
          </Button>
          {createAssignment && (<Button className="p-2 ml-2">Create Assigment</Button>)}
        </div>
        <div className=" h-full bg-white p-2">
          <DataTable
            data={sampleData ?? []}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default CustomTable;
