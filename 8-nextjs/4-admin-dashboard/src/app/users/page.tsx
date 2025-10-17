import UserTable from "@/components/table/user-table";
import { FC, Suspense } from "react";
import Loading from "../loading";

const Users: FC = () => {
  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      {/* Loader'ı sayfanın tamımı yerine sadece user table component'ın yüklendiği süre boyunca component'ın bulunduğu yerde göster */}
      <Suspense fallback={<Loading styles="my-40" />}>
        <UserTable />
      </Suspense>
    </div>
  );
};

export default Users;
