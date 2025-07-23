import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const { isLoading, error, users } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // yüklemenin başladığınız reducer'a haber ver
    dispatch({ type: "USERS_LOADING" });

    axios
      .get("https://dummyjson.com/users")
      // api'dan veri geldiğini reducer'a haber ver
      .then((res) => dispatch({ type: "USERS_SUCCESS", payload: res.data.users }))
      // api'dan hata geldiğini reducer'a haber ver
      .catch((err) => dispatch({ type: "USERS_ERROR", payload: err.message }));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>yükleniyor...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
