/*
! Sorun
  Component'ın içeriği tamamen statik yani card component'ını her kullandığımız aynı ürün bilglerine sahip card ekrana gelicek
  
? Çözüm
  Props yöntemi aracılığı card içerisinde gösterilecek bilgieri alabilir ve içeriği dinamik hale getirebilir  
*/

const Card = (props) => {
  console.log("Component'a Gelen Proplar", props);

  console.dir(document);

  return (
    <div className="box card">
      <img src={props.url} width={90} />

      <b>{props.fiyat},00 ₺</b>

      <h2>{props.baslik}</h2>

      {/* Terneray: else durumuna sahip */}
      {props.stok === 0 ? <b>Tükendi!</b> : <b>Stokta Var!</b>}

      {/* And: else durumu yok */}
      {props.stok === 0 && <b>Tükendi!</b>}
    </div>
  );
};

export default Card;
