import { delay } from "@/app/utils";

export const metadata = {
  title: "Profile",
  description: "Profile sayfası",
  keywords: ["profile", "profile sayfası", "profile detayı"],
};

const Profile = async () => {
  await delay(2500);

  return <div>Profile Sayfası</div>;
};

export default Profile;
