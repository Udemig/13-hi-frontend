"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-10 text-red-500">
      <h1>Üzgünüz bir hata oluştu</h1>
      <p>{error.message}</p>
      <button onClick={reset} className="cursor-pointer text-blue-500">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
