import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Page 1 Sayfası</h1>

      <Link href="/page1/page2" className="text-blue-500 text-lg">
        Page 2 Sayfasına Git
      </Link>
    </div>
  );
};

export default Page;
