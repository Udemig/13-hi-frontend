import { delay } from "@/app/utils";

export const metadata = {
  title: "Login",
  description: "Login sayfası",
};

const Page = async () => {
  await delay(2500);

  return (
    <div>
      <h1>Login Sayfası</h1>
    </div>
  );
};

export default Page;
