import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  // klasik redux'ta olduğu gibi useDispatch kullanıyoruz
  const dispatch = useDispatch();
  // klasik redux'ta olduğu gibi useSelector kullanıyoruz
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <div>
      <button onClick={() => dispatch(decrease())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increase())}>+</button>

      <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
    </div>
  );
};

export default Counter;
