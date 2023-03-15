import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const RoomAddForm = () => {
  const [name, setName] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [bedCount, setBedCount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState("");
  const [amenitiesTemp, setAmenitiesTemp] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const labelStyle = "block text-gray-700 text-sm font-bold mb-2";

  const sendRoomData = async (event) => {
    event.preventDefault();
    const amenities = amenitiesTemp.split(",");
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://systemrejestracji.up.railway.app/admin/room",
        {
          name,
          peopleCount,
          bedCount,
          description,
          shortDescription,
          image,
          amenities,
          price,
        },
        {
          headers: {
            authorization: `Bearer: ${Cookies.get("token")}`,
          },
          withCredentials: true,
        }
      );

      setName("");
      setPeopleCount("");
      setBedCount("");
      setPrice("");
      setDescription("");
      setShortDescription("");
      setImage("");
      setAmenitiesTemp([]);

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
    <>
      <div className="w-full max-w-lg">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={sendRoomData}
        >
          <h1 className="text-2xl font-bold mb-4">Dodaj pokój</h1>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-name">
              Nazwa pokoju
            </label>
            <input
              className={inputStyle}
              id="inline-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-beds">
              Ilość łóżek
            </label>
            <input
              className={inputStyle}
              id="inline-beds"
              type="number"
              value={bedCount}
              onChange={(event) => {
                setBedCount(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-people">
              Ilość osób
            </label>
            <input
              className={inputStyle}
              id="inline-people"
              type="number"
              value={peopleCount}
              onChange={(event) => {
                setPeopleCount(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-price">
              Cena (PLN)
            </label>
            <input
              className={inputStyle}
              id="inline-price"
              type="number"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-short-description">
              Krótki opis
            </label>
            <textarea
              className={inputStyle}
              id="inline-short-description"
              value={shortDescription}
              onChange={(event) => {
                setShortDescription(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-long-description">
              Pełny opis
            </label>
            <textarea
              className={inputStyle}
              id="inline-long-description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-image">
              Link do zdjęcia
            </label>
            <input
              className={inputStyle}
              id="inline-image"
              type="text"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="inline-amenities">
              Udogodnienia (po przecinku)
            </label>
            <input
              className={inputStyle}
              id="inline-amenities"
              type="text"
              value={amenitiesTemp}
              onChange={(event) => {
                setAmenitiesTemp(event.target.value);
              }}
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
              Dodawanie...
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Dodaj
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
              <div className="text-white max-w-xs ">Pokój został dodany</div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default RoomAddForm;
