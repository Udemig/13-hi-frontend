const Page = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug.map((item) => item).join("/")}</h1>
    </div>
  );
};

export default Page;
