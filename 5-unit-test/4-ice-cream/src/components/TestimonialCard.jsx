const TestimonialCard = () => {
  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 max-w-sm relative">
      {/* Three dots menu icon */}
      <div className="absolute top-4 right-4">
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Menu options"
          role="button"
          tabIndex={0}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="4" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="10" cy="16" r="2" />
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src="/public/profile.png" alt="Esra profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Esra</h3>
          {/* Star Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed text-sm">
        "Karşı konulmaz dondurma lezzetlerimizle donmuş mutluluğun tadını çıkarın!"
      </p>
    </div>
  );
};

export default TestimonialCard;
