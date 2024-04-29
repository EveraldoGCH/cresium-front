import { TableCellProps } from "@mui/material";

export interface Column extends TableCellProps {
    label: string;
  }
  
  export interface Row {
  [key: string]: string | number | null;
  }
  
 export interface TablaProps {
    columns: Column[];
    rows: Row[];
  }
  