import type { FC } from "react";
import Form from "../../components/form";
import { useParams } from "react-router-dom";
import { useShoe, useUpdateShoe } from "../../service/shoe";
import type { ShoeValues } from "../../types";
import { Loader } from "lucide-react";
import Error from "../../components/error";
import Container from "../../components/form/container";

const Edit: FC = () => {
  // url'deki parametreyi alıyoruz
  const { id } = useParams<{ id: string }>();

  // güncellenicek elemanın detayını alıyoruz
  const { data, isLoading, error } = useShoe(id);

  //güncelleme işlemi için useUpdateShoe hook'unu kullanıyoruz
  const { mutate, isPending } = useUpdateShoe();

  // form gönderilince
  const handleSubmit = (values: ShoeValues) => {
    mutate({ id: id as string, data: values });
  };

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} />;

  return (
    <Container title="Ürünü Düzenle">
      <Form
        onSubmit={handleSubmit}
        isPending={isPending}
        initialValues={data}
      />
    </Container>
  );
};

export default Edit;
