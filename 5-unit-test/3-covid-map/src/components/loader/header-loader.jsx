const HeaderLoader = () => {
  return (
    <div data-testid="loader" className="flex items-center gap-4">
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-10 w-[120px] rounded-xl animate-pulse shadow-md" />
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-10 w-16 rounded-lg animate-pulse shadow-md" style={{ animationDelay: '150ms' }} />
    </div>
  );
};

export default HeaderLoader;
