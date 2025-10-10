// ServerAction
// Bu fonksiyon server tarafında çalışır
// Bu fonksiyon içerisinde istersek direkt backend kodları yazabiliriz
// Form aksiyonları formData'yı parametre olarak alır
// Bu yöntem sayesinde bir form alanını CLİENT COMPONENT yapmadan yöntebiliyoruz
const handleSubmitAction = async (formData) => {
  "use server";

  const name = formData.get("name");
  const surname = formData.get("surname");

  // ..api istek at
  console.log(name, surname);
};

const Form = () => {
  return (
    <form action={handleSubmitAction} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Adınız"
        name="name"
        className="border border-gray-300 rounded-md p-2"
      />

      <input
        type="text"
        placeholder="Soyadınız"
        name="surname"
        className="border border-gray-300 rounded-md p-2"
      />

      <input
        type="email"
        placeholder="Emailiniz"
        className="border border-gray-300 rounded-md p-2"
      />

      <input
        type="tel"
        placeholder="Telefonunuz"
        className="border border-gray-300 rounded-md p-2"
      />

      <textarea
        placeholder="Mesajınız"
        className="border border-gray-300 rounded-md p-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 cursor-pointer"
      >
        İletişime Geç
      </button>
    </form>
  );
};

export default Form;
