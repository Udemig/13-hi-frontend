import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/updatedSlice";

const UserListU = () => {
  const { isLoading, error, data } = useSelector((store) => store.updatedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) return "Yükleniyor";
  if (error) return "Hata";

  return (
    <div>
      {data.map((user) => (
        <h1>{user.firstName}</h1>
      ))}
    </div>
  );
};

export default UserListU;
