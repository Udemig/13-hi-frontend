import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { usePlace } from "../../service";
import { ArrowLeft } from "lucide-react";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Container from "./container";
import Images from "./images";
import Info from "./info";
import DeleteButton from "./delete-button";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = usePlace(id);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error.message} refetch={refetch} />{" "}
      </Container>
    );

  if (!data) return null;

  return (
    <Container>
      <Images image={data.image_url} />

      <Info place={data} />

      <DeleteButton id={id!} />
    </Container>
  );
};

export default Detail;
