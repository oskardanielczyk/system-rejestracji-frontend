import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

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

  if (reservations.length < 1) {
    return <p className="m-10 text-center">Ładowanie...</p>;
  }

  console.log(reservations);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista rezerwacji</h1>
      <table className="border border-gray-200 rounded overflow-hidden shadow-md">
        <thead className="px-4 py-2 bg-white border-b last:border-none border-gray-200">
          <tr>
            <th className="py-2 px-4">Imię</th>
            <th className="py-2 px-4">Nazwisko</th>
            <th className="py-2 px-4">Od</th>
            <th className="py-2 px-4">Do</th>
            <th className="py-2 px-4">ID pokoju</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => {
            return (
              <tr
                key={reservation._id}
                className="px-4 py-2 bg-white border-b last:border-none border-gray-200"
              >
                <td className="py-2 px-4">{reservation.firstName}</td>
                <td className="py-2 px-4">{reservation.lastName}</td>
                <td className="py-2 px-4">
                  {new Date(reservation.dateFrom).toLocaleDateString(
                    "pl-PL",
                    options
                  )}
                </td>
                <td className="py-2 px-4">
                  {new Date(reservation.dateTo).toLocaleDateString(
                    "pl-PL",
                    options
                  )}
                </td>
                <td className="py-2 px-4">{reservation.roomId}</td>
                <td>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline text-xs"
                    type="submit"
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
