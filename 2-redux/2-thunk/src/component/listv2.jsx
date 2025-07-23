import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

const ListV2 = () => {
  const { isLoading, error, users } = useSelector((store) => store.userReducerv2);
  const dispatch = useDispatch();

  useEffect(() => {
    // redux thunk aksiyonunu dispatch ediyoruz
    dispatch(getUsers());
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

export default ListV2;
