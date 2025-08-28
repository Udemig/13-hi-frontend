import { HiExclamationTriangle } from "react-icons/hi2";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-md mx-auto">
          {/* Error Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <HiExclamationTriangle className="w-8 h-8 text-red-600" />
          </div>

          {/* Error Message */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Bir Hata Oluştu</h3>
          <p className="text-red-600 text-base mb-6">{message}</p>

          {/* Retry Button */}
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onRetry();
                }
              }}
            >
              Tekrar Dene
            </button>
          )}

          {/* Decorative elements */}
          <div className="mt-8 text-gray-400">
            <p className="text-sm">Sorun devam ederse lütfen destek ekibimizle iletişime geçin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorMessage;
