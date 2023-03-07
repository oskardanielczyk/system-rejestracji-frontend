import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

import RoomCard from "../components/room-card";

export default function Home() {
  // const ROOMS_DUMMY = {
  //   rooms: [
  //     {
  //       id: "r1",
  //       name: "Pokój 4 osobowy",
  //       bedCount: 2,
  //       peopleCount: 4,
  //       amenities: ["jaccuzi", "telewizor", "internet"],
  //       shortDesc:
  //         "Ten czteroosobowy pokój hotelowy oferuje wygodne i przestronne wnętrze dla gości podróżujących w większych grupach lub rodzin.",
  //       description:
  //         "Ten czteroosobowy pokój hotelowy oferuje wygodne i przestronne wnętrze dla gości podróżujących w większych grupach lub rodzin. Wyposażony w dwa podwójne łóżka, pokój zapewnia komfortowy sen dla każdego z gości. Duże okna w pokoju pozwalają na dostęp do naturalnego światła i zapewniają widok na otoczenie. W pokoju znajduje się także telewizor z płaskim ekranem oraz biurko, które zapewniają wygodną przestrzeń do pracy lub odpoczynku. Łazienka jest w pełni wyposażona i oferuje niezbędne udogodnienia, takie jak prysznic, suszarkę do włosów oraz zestaw kosmetyków. Klimatyzacja oraz bezpłatny dostęp do internetu bezprzewodowego są również zapewnione, aby zapewnić komfortowy pobyt w hotelu dla każdego z gości.",
  //       image:
  //         "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //     },
  //     {
  //       id: "r2",
  //       name: "Pokój 2 osobowy",
  //       bedCount: 1,
  //       peopleCount: 2,
  //       amenities: ["jaccuzi", "lodówka", "telewizor", "internet"],
  //       shortDesc:
  //         "Ten dwuosobowy pokój hotelowy oferuje przytulną i intymną przestrzeń dla par lub gości podróżujących samotnie.",
  //       description:
  //         "Ten dwuosobowy pokój hotelowy oferuje przytulną i intymną przestrzeń dla par lub gości podróżujących samotnie. Wyposażony w jedno podwójne łóżko, pokój zapewnia wygodny sen oraz relaks po wyczerpującym dniu. Duże okna w pokoju pozwalają na dostęp do naturalnego światła i zapewniają widok na otoczenie. W pokoju znajduje się także telewizor z płaskim ekranem oraz biurko, które zapewnia wygodną przestrzeń do pracy lub odpoczynku. Łazienka jest w pełni wyposażona i oferuje niezbędne udogodnienia, takie jak prysznic, suszarka do włosów oraz zestaw kosmetyków. Klimatyzacja oraz bezpłatny dostęp do internetu bezprzewodowego są również zapewnione, aby zapewnić komfortowy pobyt w hotelu dla każdego z gości.",
  //       image:
  //         "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //     },
  //     {
  //       id: "r3",
  //       name: "Pokój 1 osobowy",
  //       bedCount: 1,
  //       peopleCount: 1,
  //       amenities: ["lodówka", "telewizor", "internet"],
  //       shortDesc:
  //         "To przytulne i funkcjonalne miejsce, idealne dla jednej osoby. Pokój jest wyposażony w wygodne łóżko o rozmiarze jednoosobowym.",
  //       description:
  //         "To przytulne i funkcjonalne miejsce, idealne dla jednej osoby. Pokój jest wyposażony w wygodne łóżko o rozmiarze jednoosobowym, które zapewni Ci spokojny sen po dniu pełnym wrażeń. Oprócz tego, w pokoju znajdziesz biurko z krzesłem, które umożliwi Ci wygodną pracę lub naukę, oraz szafę, w której będziesz mógł schować swoje rzeczy. Na ścianie wiszą telewizor oraz lustro, które ułatwią Ci spędzenie czasu w pokoju. Dodatkowo, w pokoju znajduje się klimatyzacja, która umożliwi Ci regulowanie temperatury, oraz łazienka wyposażona w prysznic, ręczniki oraz niezbędne akcesoria toaletowe. Wszystkie elementy pokoju zostały zaprojektowane tak, aby zapewnić Ci jak największy komfort i wygodę podczas pobytu w hotelu.",
  //       image:
  //         "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80",
  //     },
  //   ],
  // };

  // const { rooms } = ROOMS_DUMMY;

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
      <div className="grid grid-cols-1 w-full justify-items-center lg:grid-cols-2 xl:grid-cols-3">
        {rooms &&
          rooms.map((room) => {
            return <RoomCard data={room} key={room._id} />;
          })}
      </div>
    </>
  );
}
