import OrderTable from "@/components/table/order-table";
import { FC, Suspense } from "react";
import Loading from "../loading";

const Orders: FC = async () => {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading styles="my-40" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Orders;
