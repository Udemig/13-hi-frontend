import { redirect, notFound } from "next/navigation";
import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

const About = () => {
  if ("admin değilse1") {
    // redirect("/");
    notFound();
  }

  console.log("About sayfası render edildi");

  return (
    <div>
      <h1>Hakkımızda Sayfası</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default About;
