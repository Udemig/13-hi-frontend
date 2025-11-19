const Error = ({ message, retry }) => {
  return (
    <div className="col-span-3 my-20 flex flex-col justify-center text-center gap-10 animate-fade-in">
      <div className="space-y-3">
        <div className="text-6xl">😞</div>
        <p className="text-gray-700 text-lg font-medium">Üzgünüz bir sorun oluştu</p>
        <p className="text-red-500 font-semibold bg-red-50 py-3 px-6 rounded-xl inline-block">{message}</p>
      </div>

      <button 
        onClick={retry} 
        className="border-2 border-pink-500 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md hover:shadow-lg mt-10 text-white p-3 px-8 rounded-xl font-medium transition-all duration-300 hover:scale-105 mx-auto"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
