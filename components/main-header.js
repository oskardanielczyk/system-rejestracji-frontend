import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const router = useRouter();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  const logoutHandler = () => {
    Cookies.remove("token");
    setToken(Cookies.get("token"));
    router.push("/login");
  };

  return (
    <>
      <div className="w-full h-20 bg-gray-800 pr-10 pl-10 flex items-center justify-between">
        <Link href="/" className="text-white text-3xl">
          Hotel Brylant - system rezerwacji
        </Link>
        <div className="flex gap-5">
          <Link href="/login" className="text-white text-xl">
            Panel administracyjny
          </Link>
          {token && (
            <button className="text-white text-xl" onClick={logoutHandler}>
              Wyloguj
            </button>
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default MainHeader;
