import ReservationList from "@/components/reservation-list";
import RoomAddForm from "@/components/room-add-form";

const AdminPage = () => {
  return (
    <>
      <div className="flex px-10 py-2 gap-4">
        <RoomAddForm />
        <ReservationList />
      </div>
    </>
  );
};

export default AdminPage;
