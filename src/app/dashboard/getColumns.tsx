import {
  ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

const defaultFirstColumns: ColumnDef<any>[] = [
  {
    accessorKey: "counsellor",
    header: "Counsellor",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("counsellor")}</div>
    ),
  },
  {
    accessorKey: "student",
    header: "Student",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("student")}</div>
    ),
  },
];

const defaultLastColumns: ColumnDef<any>[] = [
  {
    accessorKey: "period",
    header: "Front Office/Period",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("period")}</div>
    ),
  },
  {
    accessorKey: "Price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        </Button>
      );
    },
    cell: () => (
      <div className="lowercase">
        <Button variant="outline">Details</Button>
      </div>
    ),
  },
];

const priorityColumn: ColumnDef<any> = {
  accessorKey: "priority",
  header: "Priority/Status",
  cell: ({ row }) => (
    <div className="capitalize,">{row.getValue("priority")}</div>
  ),
};

const dateColumn: ColumnDef<any> = {
  accessorKey: "date",
  header: "Date/Time",
  cell: ({ row }) => (
    <div className="capitalize">{row.getValue("date")}</div>
  ),
};

export const getColumns = (props: { isUpcoming: boolean }): ColumnDef<any>[] => {
    const upcomingColumns: ColumnDef<any>[] = [
      priorityColumn,
      dateColumn,
    ];
  
    const allColumns: ColumnDef<any>[] = [
      dateColumn,
      priorityColumn,
    ];
  
  
    return props.isUpcoming
      ? [...defaultFirstColumns, ...upcomingColumns, ...defaultLastColumns]
      : [...defaultFirstColumns, ...allColumns, ...defaultLastColumns];
  };
  