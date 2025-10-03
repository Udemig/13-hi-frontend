// statik metadata
// export const metadata = {
//   title: "Ürün Detay Sayfası",
// };

// dinamik metadata
// generateMetadata parametre olarak sayfanın aldığı parametreleri alır
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün bilgileri için istek at

  return {
    title: `${id}  id'li Ürünün Detay Sayfası`,
  };
};

//* Next.js'de urldeki params & searchParams component'lara prop olarak gelir
//* Promise formatında geldiğin async await ile extra hook kullanmadan parametrelere erişebiliriz
const Page = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1 className="font-bold text-yellow-500">{id}</h1>
      <h1>Ürün Detayı</h1>
    </div>
  );
};

export default Page;
