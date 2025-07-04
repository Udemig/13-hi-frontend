const SkeletonLoader = () => {
  // 20 elemana sahip bir dizi oluştur
  const array = new Array(20).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
      {array.map((item, key) => (
        <div key={key} className="animate-pulse">
          {/* thumbnail */}
          <div className="w-full aspect-video bg-grey rounded-xl mb-3" />

          {/* video info */}
          <div className="flex gap-3">
            {/* avatar */}
            <div className="w-9 h-9 bg-grey rounded-full" />
            {/* yazı içeriği */}
            <div className="flex-1 space-y-2">
              {/* başlık */}
              <div className="h-4 bg-grey rounded w-full" />
              <div className="h-4 bg-grey rounded w-3/4" />

              {/* kanal ismi */}
              <div className="h-3 bg-grey w-1/3 rounded" />

              {/* görnütülenme tarih */}
              <div className="flex gap-2">
                <div className="h-3 bg-grey rounded w-20" />
                <div className="h-3 bg-grey rounded w-16" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
