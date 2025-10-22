import UserTable from "@/components/table/user-table";
import { FC, Suspense } from "react";
import Loading from "../loading";
import UserModal from "@/components/modal/user-modal";

interface Props {
  searchParams: Promise<{ userId?: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      {/* Loader'ı sayfanın tamımı yerine sadece user table component'ın yüklendiği süre boyunca component'ın bulunduğu yerde göster */}
      <Suspense fallback={<Loading styles="my-40" />}>
        <UserTable />
      </Suspense>

      {/* Url'de bir userId parametresi varsa modalı göster */}
      {userId && <UserModal userId={userId} />}
    </div>
  );
};

export default Users;
