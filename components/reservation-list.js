import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useTable, usePagination } from "react-table";
import { format } from "date-fns";

const COLUMNS = [
  {
    Header: "Imię",
    accessor: "firstName",
  },
  {
    Header: "Nazwisko",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Od",
    accessor: "dateFrom",
    Cell: ({ value }) => {
      return format(new Date(value), "dd.mm.yyyy");
    },
  },
  {
    Header: "Do",
    accessor: "dateTo",
    Cell: ({ value }) => {
      return format(new Date(value), "dd.mm.yyyy");
    },
  },
  {
    Header: "ID pokoju",
    accessor: "roomId",
  },
];

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://systemrejestracji.up.railway.app/admin/reservations",
          {
            headers: {
              authorization: `Bearer: ${Cookies.get("token")}`,
            },
            withCredentials: true,
          }
        );

        setReservations(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = useTable(
    {
      columns: COLUMNS,
      data: reservations,
    },
    usePagination
  );

  const { pageIndex } = state;

  if (reservations.length < 1) {
    return <p className="m-10 text-center">Ładowanie listy rezerwacji...</p>;
  }

  return (
    <div className="w-full mb-4">
      <h1 className="text-2xl font-bold mb-4">Lista rezerwacji</h1>
      <table
        className="border border-gray-200 rounded overflow-hidden shadow-md w-full"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 border border-gray-200 text-center text-white bg-gray-800"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 bg-white border border-gray-200 text-center"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-1 justify-center mt-2">
        <span>{`Strona ${pageIndex + 1} z ${pageOptions.length}`}</span>
        <button
          onClick={() => previousPage()}
          className="bg-gray-500 enabled:hover:bg-gray-800 text-white font-bold text-xs py-1 px-2 rounded focus:outline-none focus:shadow-outline disabled:opacity-25 disabled:cursor-not-allowed"
          disabled={!canPreviousPage}
        >
          Poprzedni
        </button>
        <button
          onClick={() => nextPage()}
          className="bg-gray-500 enabled:hover:bg-gray-800 text-white font-bold text-xs py-1 px-2 rounded focus:outline-none focus:shadow-outline disabled:opacity-25 disabled:cursor-not-allowed"
          disabled={!canNextPage}
        >
          Następny
        </button>
      </div>
    </div>
  );
};

export default ReservationList;
