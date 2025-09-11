import type { MouseEvent, ChangeEvent, FC, FormEvent } from "react";

const Form: FC = () => {
  // input değişince
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // butona tıklanınca
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  // form gönderildiğinde
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => e.target.value} />

      <input type="text" onChange={handleChange} />

      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
