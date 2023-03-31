import { useRouter } from "next/router";
import Link from "next/link";

import ReservationForm from "@/components/reservation-form";
import RoomDetails from "@/components/room-details";

const Reservation = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <>
      <Link href="/" className="mt-10 ml-10 underline">
        powrót do listy pokoi
      </Link>
      <div className="lg:flex gap-4 px-10">
        <ReservationForm roomId={data.id} price={data.price} />
        <RoomDetails data={data} />
      </div>
    </>
  );
};

export default Reservation;
