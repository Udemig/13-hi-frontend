import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const List = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["places"],
    queryFn: () => axios.get("http://localhost:4001/api/places"),
  });

  return <div>List</div>;
};

export default List;
