"use client";

const ClientComponent = ({ children }) => {
  console.log("ClientComponent render edildi");

  return (
    <div className="p-10 border-2 border-red-500 my-10">
      <h1>Client Component</h1>

      {/* Aşağıdaki server component, client component içerisinde kullandılığı için client'a dönüştü */}
      {/* <ServerComponent /> */}

      {/* Aşağıda bir server component render etsek'de HOC yöntemiyle yaptığımız için client'a dönüşmez */}
      {children}
    </div>
  );
};

export default ClientComponent;
