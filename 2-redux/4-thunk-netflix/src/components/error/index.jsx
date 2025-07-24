import { ShieldAlert } from "lucide-react";

const Error = ({ info }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-40">
      <ShieldAlert className="text-red-500 size-10" />
      <h1 className="text-2xl font-semibold">Üzgünüz bir sorun oluştu</h1>
      <p className="text-gray-200">{info}</p>
    </div>
  );
};

export default Error;
