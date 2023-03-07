import LoginForm from "@/components/login-form";
import RoomAddForm from "@/components/room-add-form";

const AdminPage = () => {
  return (
    <>
      <h1 className="m-10 text-xl bg-white p-5 shadow-md rounded">
        Panel administracyjny - Hotel Brylant
      </h1>
      <div className="flex">
        <LoginForm />
        <RoomAddForm />
      </div>
    </>
  );
};

export default AdminPage;
