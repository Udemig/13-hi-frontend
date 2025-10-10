import Link from "next/link";

const Page3 = () => {
  return (
    <div>
      <h1>Page 4 Sayfası</h1>

      <Link href="/page3" className="text-blue-500 text-lg">
        Page 3 Sayfasına Git
      </Link>
    </div>
  );
};

export default Page3;
