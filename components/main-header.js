import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-800 pr-10 pl-10 flex items-center justify-between">
        <Link href="/" className="text-white text-3xl">
          Hotel Brylant - system rezerwacji
        </Link>
        <Link href="/admin" className="text-white text-xl">
          Panel administracyjny
        </Link>
      </div>
      ;
    </>
  );
};

export default MainHeader;
