import type { FC } from "react";
import { Link } from "react-router-dom";
import { usePlaces } from "../../service";

const Header: FC = () => {
  const { data } = usePlaces();

  return (
    <header className="border-b border-zinc-300 shadow-sm">
      <div className="container flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Tripster</h1>

          <nav className="flex gap-4 items-center">
            <Link to="/">Oteller ({data?.length})</Link>
            <Link to="/" className="max-md:hidden">
              Popüler
            </Link>
            <Link to="/admin/create">Oluştur</Link>
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 px-4 py-2 rounded-full max-md:hidden">Kayıt Ol</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
