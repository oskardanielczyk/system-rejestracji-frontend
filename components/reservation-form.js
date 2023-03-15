import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import axios from "axios";

const ReservationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setDateFrom(start);
    setDateTo(end);
  };

  const reservationSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://systemrejestracji.up.railway.app/reservation",
        {
          firstName,
          lastName,
          email,
          address: {
            country,
            city,
            street,
          },
          dateFrom,
          dateTo,
          roomId: props.roomId,
        },
        {
          withCredentials: true,
        }
      );

      setFirstName("");
      setLastName("");
      setEmail("");
      setCountry("");
      setCity("");
      setStreet("");
      setDateFrom(new Date());
      setDateTo(new Date());

      setIsLoading(false);

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-7 mt-4 grow shadow rounded bg-white">
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={reservationSubmit}>
        <h1 className="text-2xl font-bold mb-4">Formularz rezerwacji</h1>
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
            value={firstName}
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
            value={lastName}
            placeholder="Nazwisko"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Kraj
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            value={country}
            placeholder="Kraj"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            Miasto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            value={city}
            placeholder="Miasto"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="street"
          >
            Ulica
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="street"
            type="text"
            value={street}
            placeholder="Ulica"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Termin wizyty
          </label>
          <ReactDatePicker
            selected={dateFrom}
            startDate={dateFrom}
            endDate={dateTo}
            dateFormat="dd.MM.yyyy"
            onChange={onDateChange}
            selectsRange
            inline
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {isLoading ? (
          <button
            disabled=""
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              ></path>
            </svg>
            Rezerwowanie...
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Rezerwuj
          </button>
        )}

        {showToast && (
          <div className="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 mt-4">
            <div className="text-green-500 rounded-full bg-white mr-3">
              <svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                className="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
            </div>
            <div className="text-white max-w-xs ">
              Pokój został zarezerwowany
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReservationForm;
