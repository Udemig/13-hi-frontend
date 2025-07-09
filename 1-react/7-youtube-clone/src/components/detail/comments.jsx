import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../loader/spinner";

const Comments = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // api.get("/comments", { params: { id } }).then((res) => console.log(res.data));
  }, []);

  // todo yorum verilerini listele

  if (loading) return <Spinner designs="my-20" />;

  return <div>Comments</div>;
};

export default Comments;
