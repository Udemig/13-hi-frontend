"use client";

import { usePathname } from "next/navigation";

const Form = () => {
  const pathname = usePathname();

  return (
    <form onSubmit={() => {}} className="p-10 border-red-500 border-4">
      <input type="text" placeholder="Adınız" />
      <input type="text" placeholder="Soyadınız" />
      <input type="email" placeholder="Emailiniz" />
      <input type="tel" placeholder="Telefonunuz" />
      <textarea placeholder="Mesajınız" />
      <button type="submit">İletişime Geç</button>
    </form>
  );
};

export default Form;
