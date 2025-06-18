import { useEffect, useState } from "react";

const UserList = () => {
  // Yüklenme durumunun / Hata'nın / Veri'nin
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ComponentDidMount: Bileşenin ekrana gelme anı
  // Bu yaşam döngüsü anını en çok veri çekme amacıyla kullanırız
  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/users")
      // json formatında verileri js verisine çevir
      .then((res) => res.json())
      // kullanıcı versini state'e aktar
      .then((data) => setUsers(data.users))
      // hata geldiyse hata açıklamsını state'aktar
      .catch((err) => setError(err.message))
      // yüklenme bitince isLoading state'ini false'a çek
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      {/*
       * Yüklenme devam ediyorsa: loader bas
       * API'dan hata geldiyse: hata mesajınnı bas
       * API'dan veri geldiyse: verileri ekrana bas
       */}
      {isLoading ? (
        <div>Loader....</div>
      ) : error ? (
        <div>HATA! {error}</div>
      ) : (
        users?.map((user) => (
          <div key={user.id}>
            <img src={user.image} />
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.age}</h1>
            <span>{user.crypto?.coin}</span>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
