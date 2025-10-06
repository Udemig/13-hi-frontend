import { ShieldAlert } from "lucide-react";

const Error = ({ info }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-40 backdrop-blur-md bg-red-500/10 border border-red-500/30 rounded-3xl p-10 mx-auto max-w-2xl">
      <ShieldAlert className="text-red-500 size-16 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
      <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
        Üzgünüz bir sorun oluştu
      </h1>
      <p className="text-gray-300 text-center">{info}</p>
    </div>
  );
};

export default Error;
