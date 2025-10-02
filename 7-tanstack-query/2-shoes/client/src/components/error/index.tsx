import type { FC } from "react";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return <div>Error</div>;
};

export default Error;
