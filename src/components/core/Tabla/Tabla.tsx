"use client"
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  date: string,
  name: number,
  amount: number,
  account: number,
  transaccion: number,
) {
  return { date, name, amount, account, transaccion };
}

const rows = [
  createData('14 Feb 2024', 159, 6.0, 24, 4.0),

];

export interface Columns extends TableCellProps {
  label: string;
}

export interface Row extends TableRowProps {
  accesor: string;
  value: string | number | undefined;
  align?: "center" | "inherit" | "right" | "left" | "justify" | undefined;
}

interface TablaProps {
  columns: Columns[];
  rows: Row[];
}

export default function Tabla({ columns, rows }: TablaProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((elm) => {
              return <TableCell align={elm.align ?? "inherit"}>{elm.label}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {rows.map((row: Row) => (
              <TableCell align={row.align ?? "inherit"}>{row.value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}