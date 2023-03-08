import { useRouter } from "next/router";

import ReservationForm from "@/components/reservation-form";
import RoomDetails from "@/components/room-details";

const Reservation = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <div className="lg:flex gap-4 px-10">
      <ReservationForm roomId={data.id} />
      <RoomDetails data={data} />
    </div>
  );
};

export default Reservation;
