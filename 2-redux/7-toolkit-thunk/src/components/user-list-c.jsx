import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError, setLoading } from "../redux/slices/classicSlice";

const UserListC = () => {
  const { isLoading, error, data } = useSelector((store) => store.classicReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setData(res.data.users)))
      .catch((err) => dispatch(setError(err)));
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

export default UserListC;
