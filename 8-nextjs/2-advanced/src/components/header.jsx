import { fetchRecipes } from "@/utils/service";
import Link from "next/link";

const Header = async () => {
  const data = await fetchRecipes();

  return (
    <div className="p-5 px-10 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <h1 className="font-moghul text-2xl">NEXT.JS</h1>

        <form
          action="/recipes-server" // form gönderilince yönlendireceğimiz sayfa
          className="border border-gray-300 rounded-md p-2 mb-2"
        >
          <input
            name="query" // url'e eklenicek parametrenin ismi
            type="text"
            placeholder="Search"
          />
          <button type="submit">Ara</button>
        </form>
      </div>

      <nav className="flex gap-5 font-bitcount">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/wonders">Wonders</Link>
        <Link href="/recipes-server">
          Recipes Server ({data.recipes.length})
        </Link>
      </nav>
    </div>
  );
};

export default Header;
