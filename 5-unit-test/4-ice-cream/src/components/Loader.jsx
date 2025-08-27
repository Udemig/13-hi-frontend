const Loader = ({ message = "Yükleniyor..." }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Spinning loader */}
          <div className="relative mx-auto w-16 h-16 mb-6">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
          </div>

          {/* Loading message */}
          <p className="text-gray-600 text-lg font-medium">{message}</p>

          {/* Additional loading dots animation */}
          <div className="flex justify-center space-x-1 mt-4">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
