import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-bold text-yellow-500">404</h1>

      <h2>Sayfa bulunamadı!</h2>

      <Link href="/" className="underline text-blue-500">
        Anasayfa
      </Link>
    </div>
  );
};

export default NotFound;
