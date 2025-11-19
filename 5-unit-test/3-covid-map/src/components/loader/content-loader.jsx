const ContentLoader = () => {
  return (
    <div data-testid="loader" className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i} 
          className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-24 rounded-2xl animate-pulse shadow-md"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default ContentLoader;
