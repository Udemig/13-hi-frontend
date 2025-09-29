import type { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../utils/constants";
import { PLACE_SCHEMA } from "../../utils/schemas";
import { useCreatePlace } from "../../service";
import type { PlaceFormData } from "../../types";

const Create: FC = () => {
  const { mutate, isPending } = useCreatePlace();

  // form gönderilince:
  // e.preventDefault() işlemini oto. olarak yapar.
  // values: formdaki bütün değerleri alır.
  // ikinci parametre olarak: formik'in fonksiyonlarını alır.
  // not: handleSubmit fonksiyonu form geçerli değilse çalışmaz
  const handleSubmit = (values: PlaceFormData, functions: any) => {
    mutate(values);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={PLACE_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-2xl mx-auto grid gap-10">
        {INPUT_FIELDS.map((item, key) => (
          <div key={key} className="field relative">
            <label>{item.label}</label>
            <Field type={item.type} name={item.name} className="input" />
            <ErrorMessage
              name={item.name}
              component="div"
              className="text-red-500 absolute text-sm -bottom-7"
            />
          </div>
        ))}

        <button
          disabled={isPending}
          className="my-5 bg-blue-500 py-2 px-6 text-white rounded-md transition hover:bg-blue-600 cursor-pointer disabled:brightness-80"
        >
          {isPending ? "Oluşturuluyor..." : "Oluştur"}
        </button>
      </Form>
    </Formik>
  );
};

export default Create;
