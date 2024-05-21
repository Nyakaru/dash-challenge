"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableFacetedFilter } from "./faceted-filter";
import { DataTableViewOptions } from "./view-options";

export interface DataTableColumnConfig {
  key: string;
  title: string;
  options: any[]; // Assuming options are strings
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterColumns?: DataTableColumnConfig[];
}

export function DataTableToolbar<TData>({
  table,
  filterColumns = [],
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const renderFilter = (columnConfig: DataTableColumnConfig) => {
    const column = table.getColumn(columnConfig.key);

    if (!column) {
      return null;
    }

    return (
      <DataTableFacetedFilter
        key={columnConfig.key}
        column={column}
        title={columnConfig.title}
        options={columnConfig.options}
      />
    );
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterColumns?.map((columnConfig) => (
          <Input
            key={columnConfig.key}
            placeholder={`Filter ${columnConfig.title.toLowerCase()}...`}
            value={
              (table.getColumn(columnConfig.key)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(columnConfig.key)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        ))}
        {filterColumns?.map(renderFilter)}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 ml-3 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
