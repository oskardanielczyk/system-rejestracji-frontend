import { useState } from "react";

const ReservationForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [roomId, setRoomId] = useState();

  // {
  //     "firstName": "Imieniv",
  //     "lastName": "Nazwiskov",
  //     "address": {
  //         "country": "Poland",
  //         "city": "Warszawa",
  //         "street": "3 maja 69"
  //     },
  //     "dateFrom": "2023-11-3",
  //     "dateTo": "2023-12-6",
  //     "roomId": "6407038283a27e05ebbe62ce"
  // }

  return (
    <div className="w-full my-7">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            Imię
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Imię"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Nazwisko
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Nazwisko"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Rezerwuj
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
