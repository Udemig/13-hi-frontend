import Link from "next/link";

// Parallel Routes
// Slot olarak tanımlanan  notifications, revenue, users sayfalarını
// Ve dashboard sayfasını layout'a prop olarak aldık
// Ve 4 farklı sayfayı aynı anda ekrana bastık
// Burada 4 component'da oluştarabilirdik ama o zaman page.jsx'in özelliklerinden faydalanamazdık (metadata, loading, error..)
const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>

      <div className="flex justify-center my-10 gap-10">
        <Link href="/dashboard">Admin Paneli</Link>
        <Link href="/dashboard/settings">Panel Ayarları</Link>
      </div>

      <div className="my-10">
        {children}

        <div className="flex mt-10 gap-10 mb-10">
          <div className="flex-1">{notifications}</div>
          <div className="flex-1">{revenue}</div>
        </div>

        <div>{users}</div>
      </div>
    </div>
  );
};

export default Layout;
