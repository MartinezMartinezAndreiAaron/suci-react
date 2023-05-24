import React, { useEffect, useMemo, useState } from "react";
import { getReportes } from "../services/ApiRest";
import { useTable } from "react-table";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarSupervisor from "../components/NavBarSupervisor";
import { useNavigate } from "react-router-dom";

function Reportes() {
  const navigate = useNavigate();
  let tipoUsuario = localStorage.getItem("idtipousuario");
  const [reportes, setReportes] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "idreporte", // accessor is the "key" in the data
      },
      {
        Header: "Descripcion",
        accessor: "descripcion", // accessor is the "key" in the data
      },
      {
        Header: "Fecha",
        accessor: "fecha",
      },
      {
        Header: "Direccion",
        accessor: "direccion",
      },
      {
        Header: "Estatus",
        accessor: "estatus",
      },
      {
        Header: "Reportador",
        accessor: "idreportadorfk.nombres",
      },
      {
        Header: "Acciones",
        Cell: ({ cell }) => (
          <button className="btn btn-primary" onClick={()=>navigate("/revisionReportes?id="+cell.row.values.idreporte)}>
            <ion-icon name="pencil"></ion-icon>
          </button>
        ),
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data: reportes });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const obtenerReportes = async () => {
    return await getReportes();
  };

  useEffect(() => {
    obtenerReportes().then((data) => setReportes(data));
  }, []);

  return (
    <>
      {tipoUsuario === "1" ? <NavBarSupervisor /> : <NavBarAdmin />}
      <div className="reports">
        <div
        className="table-responsive"
          style={{
            display: "flex",
            flexDirection: "column",
            marginInline: 20,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <h1>Reportes</h1>
          <table className="table-dark" {...getTableProps()}>
            <thead>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th className="table-dark" {...column.getHeaderProps()}>
                          {
                            // Render the header
                            column.render("Header")
                          }
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {
                // Loop over the table rows
                rows.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr {...row.getRowProps()}>
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <td {...cell.getCellProps()}>
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Reportes;
