const Error = ({ message, retry }) => {
  return (
    <div className="col-span-3 my-20 flex flex-col justify-center text-center gap-10">
      <div>
        <p>Üzgünüz bir sorun oluştu</p>
        <p className="text-red-500">{message}</p>
      </div>

      <button onClick={retry} className="border shadow mt-10 text-black p-2">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
