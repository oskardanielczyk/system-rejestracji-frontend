import Image from "next/image";
import Link from "next/link";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import LoginData from "@/store/login-data";

const RoomCard = (props) => {
  const { token, setToken } = useContext(LoginData);

  useEffect(() => {
    setToken(Cookies.get("token"));
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "http://6.tcp.eu.ngrok.io:17924/admin/room",
        {
          data: {
            id,
          },
          headers: {
            authorization: `Bearer: ${Cookies.get("token")}`,
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
    <div className="my-7 shadow rounded overflow-hidden relative bg-white">
      <Image
        src={props.data.image}
        width="400"
        height="400"
        alt={props.data.name}
        className="w-full max-h-56 object-cover"
      />
      <div className="absolute top-0 mt-4 ml-4 bg-white/75 rounded">
        <h1 className="text-md px-4 py-2">{props.data.name}</h1>
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {props.data.amenities &&
            props.data.amenities.map((item, key) => {
              key++;
              return (
                <div
                  className="px-2 py-1 bg-blue-400 text-white rounded text-xs uppercase"
                  key={key}
                >
                  {item}
                </div>
              );
            })}
        </div>
        <div className="flex justify-between">
          <p>
            Ilość łóżek:{" "}
            <span className="font-bold">{props.data.bedCount}</span>
          </p>
          <p>
            Ilość osób:{" "}
            <span className="font-bold">{props.data.peopleCount}</span>
          </p>
        </div>
        <p className="mt-5 mb-1 font-bold">Opis:</p>
        <p className="leading-7">{props.data.shortDescription}</p>
      </div>
      <div className="flex justify-end gap-1 pr-4">
        <Link
          href={{
            pathname: `/reservation/${props.data._id}`,
            query: props.data,
          }}
          className="py-2 px-4 m-4 mr-0 bg-blue-500 rounded text-white font-bold"
        >
          Zarezerwuj
        </Link>
        {token && (
          <button
            onClick={(e) => handleDelete(props.data._id)}
            className="py-2 px-4 my-4 mx-0 bg-red-500 rounded text-white font-bold"
          >
            Usuń pokój
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
