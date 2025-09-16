import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

// HOC : Higher Order Component
// Normal component'lardan farklı olarak açılış ve kapanış etiketine sahiptir ve etiket içerisine yazılan içereğe children prop'u aracılığıyla erişilir.
const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Warning;
