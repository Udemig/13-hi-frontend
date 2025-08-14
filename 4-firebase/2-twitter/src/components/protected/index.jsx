import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";

const Protected = () => {
  // oturumu açık olan kullanıcının state'i
  const [user, setUser] = useState(undefined);

  // kullanıcnın oturum verisine eriş
  useEffect(() => {
    // oturum verisine abone ol
    const unsub = onAuthStateChanged(auth, (activeUser) => setUser(activeUser));

    // component ekrandan ayrılınca aboneliği sonlandır
    return () => unsub();
  }, []);

  // oturumu verisi gelene kadar ekrana loader bas
  if (user === undefined) return <PageLoader />;

  // kullanıcı oturumu kapalıysa veya emaili doğrulanmamışsa logine yönlendir
  if (user === null || user?.emailVerified === false) {
    if (user?.emailVerified === false) toast.info("Mailiniz doğrulayın");

    // anasayfaya yönlendir
    return <Navigate to="/" replace />;
  }

  // kullanıcnın oturumu açıksa sayfayı göster
  return <Outlet context={user} />;
};

export default Protected;
