import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Page 2 Sayfası</h1>

      <Link href="/page1" className="text-blue-500 text-lg">
        Page 1 Sayfasına Dön
      </Link>
    </div>
  );
};

export default Page;
