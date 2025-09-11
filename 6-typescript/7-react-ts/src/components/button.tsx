import type { JSX, FC } from "react";

type PropType = {
  text: string;
};

class Prop {
  text: string = "";
}

interface IProp {
  text: string;
}

// 1) Component Tipi Tanımlama
// Prop type: Tanımladık
// Return type: Oto Algılama
const Button1 = ({ text }: IProp) => {
  return <div>Button</div>;
};

// 2) Component Tipi Tanımlama
// Prop type: Tanımladık
// Return type: Tanımladık
const Button2 = ({ text }: IProp): JSX.Element => {
  return <div>Button</div>;
};

// 3) Component Tipi Tanımlama
// Prop type: Tanımladık
// Return type: Tanımladık
const Button3: FC<IProp> = ({ text }) => {
  return <div>Button</div>;
};

export { Button1, Button2, Button3 };
