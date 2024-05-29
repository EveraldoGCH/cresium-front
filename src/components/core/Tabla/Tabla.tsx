"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import React, { useState } from "react";
import { Column, Row, TablaProps } from "./TablaProps";
import { colorsVars } from "@/utils/constants/colorsVars";

//Este componente renderiza solamente las rows que coincidan con las columnas

const Tabla = React.memo(
  function TablaComp({ columns, rows = [], onClickRow }: TablaProps) {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((elm: Column, i) => {
                return (
                  <TableCell align={elm.align ?? "inherit"} key={elm.label + i}>
                    {elm.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: Row) => (
                <TableRow
                  key={row.name}
                  sx={
                    onClickRow != undefined
                      ? {
                          ": hover": {
                            cursor: "pointer",
                            backgroundColor: colorsVars.grey100,
                          },
                        }
                      : {}
                  }
                  onClick={() => (onClickRow ? onClickRow(row) : {})}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.rowAccesor}
                      align={column.align ?? "inherit"}
                    >
                      {row[column.rowAccesor as keyof Row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    );
  },
  (oldProps, newProps) => {
    return (
      oldProps.columns === newProps.columns && oldProps.rows === newProps.rows
    );
  },
);

//Solo se vuelve a renderizar si las props columns y rows cambian

export default Tabla;
