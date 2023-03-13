import axios from "axios";
import { useState } from "react";

const RoomAddForm = () => {
  const [name, setName] = useState();
  const [peopleCount, setPeopleCount] = useState();
  const [bedCount, setBedCount] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [image, setImage] = useState();
  const [amenitiesTemp, setAmenitiesTemp] = useState();

  const inputStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const labelStyle = "block text-gray-700 text-sm font-bold mb-2";

  const sendRoomData = async (event) => {
    event.preventDefault();
    const amenities = amenitiesTemp.split(",");
    console.log(amenities);
    try {
      const response = await axios.post(
        "https://systemrejestracji.up.railway.app/admin/create/",
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
            authorization: `Bearer: ${sessionStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full max-w-lg m-10">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={sendRoomData}
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-name">
                Nazwa pokoju
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-name"
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-beds">
                Ilość łóżek
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-beds"
                type="number"
                onChange={(event) => {
                  setBedCount(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-people">
                Ilość osób
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-people"
                type="number"
                onChange={(event) => {
                  setPeopleCount(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-price">
                Cena (PLN)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-price"
                type="number"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-short-description">
                Krótki opis
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className={inputStyle}
                id="inline-short-description"
                onChange={(event) => {
                  setShortDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-long-description">
                Pełny opis
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className={inputStyle}
                id="inline-long-description"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-image">
                Link do zdjęcia
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-image"
                type="text"
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className={labelStyle} htmlFor="inline-amenities">
                Udogodnienia (po przecinku)
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={inputStyle}
                id="inline-amenities"
                type="text"
                onChange={(event) => {
                  setAmenitiesTemp(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Dodaj
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RoomAddForm;
