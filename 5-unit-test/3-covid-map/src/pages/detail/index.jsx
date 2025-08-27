import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { useEffect } from "react";
import Header from "./header";
import Content from "./content";

const Detail = () => {
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    dispatch(getDetails(country));
  }, []);

  return (
    <div className="flex-1 min-h-[calc(100vh-76px)]  grid place-items-center p-6">
      <div className="bg-white border shadow-2xl min-h-[65%] rounded-lg py-6 px-8 max-w-4xl max-md:w-full md:w-[80%]">
        <Header />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
