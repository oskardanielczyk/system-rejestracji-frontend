import ReservationList from "@/components/reservation-list";
import RoomAddForm from "@/components/room-add-form";

const AdminPage = () => {
  return (
    <>
      <div className="px-10 py-2">
        <ReservationList />
        <RoomAddForm />
      </div>
    </>
  );
};

export default AdminPage;
