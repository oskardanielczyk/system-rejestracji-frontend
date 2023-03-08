import { useRouter } from "next/router";

import RoomCard from "@/components/room-card";
import ReservationForm from "@/components/reservation-form";

const Reservation = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <div className="flex gap-4 px-10">
      <ReservationForm roomId={data.id} />
      <RoomCard data={data} />
    </div>
  );
};

export default Reservation;
