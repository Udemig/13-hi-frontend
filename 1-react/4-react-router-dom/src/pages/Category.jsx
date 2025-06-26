import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

const Category = () => {
  // Bu kapsayıcı route'ları kullanıcı yetkilendirme sistemi içinde kulalnırız örneğin bu kapsayı route içerisinde yer alan sayfaların sadece adminlerin girmesini sağlayıcak bir koşul yazılabilir

  if ("user.role !=== admin") {
    // dışarıya yönlendir
  }

  return (
    <div className="row g-4">
      <div className="col-sm-4">
        <Aside />
      </div>

      {/* Story ve Novel sayfalarını kapsayıcı konumda olan Category sayfası içerisinde /category/story veya  /category/novel adreslerine gildildiğinde ilgili sayfanın içeriğini ekrana basmak için yani kapsayıcı route içerisinde alt route'un elementini ekrana basmak için Outlet Component'ını kullanırız  */}
      <div className="col-sm-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Category;
