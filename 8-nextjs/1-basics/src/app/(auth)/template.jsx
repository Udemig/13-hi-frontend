"use client";

import Link from "next/link";
import { useState } from "react";

// Layout component'ları HOC türündedir
// Ekrana basılacak olan sayfa içeriğini children prop'u ile alır
const Template = ({ children }) => {
  const [name, setName] = useState();

  if ("admin değilse") {
    // dışarıya yönlendir
  }

  return (
    <div className="flex items-center gap-10 px-5">
      <aside className="flex flex-col gap-5 border p-5 rounded-md">
        <h1>Selam, {name}</h1>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="isminizi giriniz"
          className="border p-2 rounded-md"
        />
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </aside>

      <div>{children}</div>
    </div>
  );
};

export default Template;
