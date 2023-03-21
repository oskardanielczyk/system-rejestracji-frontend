import { useEffect, useState } from "react";
import axios from "axios";

import RoomCard from "../components/room-card";

export default function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://systemrejestracji.up.railway.app/rooms/"
        );

        setRooms(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (rooms.length < 1) {
    return <p className="m-10 text-center">Ładowanie...</p>;
  }

  return (
    <>
      <div className="p-10 pb-0 pt-0 font-bold">
        <h1 className="text-4xl">Oferta</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 w-full p-10 pt-0 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {rooms &&
          rooms.map((room) => {
            return <RoomCard data={room} key={room._id} />;
          })}
      </div>
    </>
  );
}
