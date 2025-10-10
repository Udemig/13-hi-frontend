"use client";
// import { useParams, useSearchParams } from "next/navigation";
import Form from "./form";

// Server component'larda url'deki params & searchParams'lara prop aracılığı ile erişiriz
const Contact = () => {
  // client component'larda url'deki searchParams'lara useSearchParams hook'u ile erişiriz
  // const { id } = useParams();
  // const searchParams = useSearchParams();

  // console.log(searchParams.get("title"));
  return (
    <div className="p-10  border-blue-500 border-4">
      <h1>İletişim Sayfası</h1>

      <p>Konum: İstanbul</p>
      <p>Telefon: 555 555 55 55</p>
      <p>Email: info@example.com</p>
      <p>Bizimle iletişime geçebilirsiniz</p>

      <br />
      <hr />
      <br />

      <Form />
    </div>
  );
};

export default Contact;
