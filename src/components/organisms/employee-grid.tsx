import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import type { ColDef } from "ag-grid-community";
import type { Employee } from "../../types/employee";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import employeesData from "./../../data/employees.json";

ModuleRegistry.registerModules([AllCommunityModule]);

export function EmployeeGrid() {
  const rowData = employeesData.employees;

  const [colDefs, _setColDefs] = useState<ColDef<Employee>[]>([
    {
      headerName: "ID",
      field: "id",
      maxWidth: 100,
      flex: 1,
      headerClass: "salary-header",
    },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Last Name", field: "lastName" },
    { headerName: "Email", field: "email" },
    { headerName: "Department", field: "department" },
    { headerName: "Position", field: "position" },
    { headerName: "Location", field: "location" },
    {
      headerName: "Salary",
      field: "salary",
      valueFormatter: (p: any) =>
        p.value == null
          ? ""
          : "₹" +
            Number(p.value).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            }),
    },
    { headerName: "Hire Date", field: "hireDate" },
    { headerName: "Age", field: "age", maxWidth: 110 },
    { headerName: "Performance", field: "performanceRating" },
    { headerName: "Projects", field: "projectsCompleted" },
    {
      headerName: "Status",
      field: "isActive",
      cellClassRules: {
        "green-cell": (p: any) => Boolean(p.value),
      },
    },
    { headerName: "Skills", field: "skills" },
    { headerName: "Manager", field: "manager" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      floatingFilter: true,
    };
  }, []);
  return (
    <div className="ag-theme-quartz h-[45vh] w-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20]}
        getRowClass={(params) => {
          if ((params.data?.salary ?? 0) > 100000) return "high-salary-row";
          if (!params.data?.isActive) return "inactive-row";
          return "normal-row";
        }}
      />
    </div>
  );
}
