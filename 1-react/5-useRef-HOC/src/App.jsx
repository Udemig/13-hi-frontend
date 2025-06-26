import Counter from "./ref-components/Counter";
import Input from "./ref-components/Input";
import Scroll from "./ref-components/Scroll";
import Timer from "./ref-components/Timer";
import ConfirmModal from "./hoc-components/ConfirmModal";
import FormModal from "./hoc-components/FormModal";
import Modal from "./hoc-components/Modal";

const App = () => {
  return (
    <div>
      {/* Normal componentlar oluşturudğumuz zaman modal içeriiğinin büyük bir kısmı aynı kaldığından dolayı kod tekrararına düştük
      <ConfirmModal />
      <FormModal />
      */}

      {/* Bu kod tekrarını önlemek için HOC yöntemini kullanbiliriz Modal'ın temel arayüznü belirledikten sonra içeriğini daha sonradan belirleyebiliyoruz 
            <Modal showButtons={true}>
        <h2>Silmek istediğinizden emin misiniz?</h2>
        <p>Bu işlemin bir geri dönüşü yok!</p>
      </Modal>

      <Modal showButtons>
        <h2>Aramıza Katıl</h2>
        <label>Email</label>
        <input type="text" className="form-control" placeholder="mail" />
        <label>Şifre</label>
        <input type="text" className="form-control" placeholder="****" />
      </Modal>

      <Modal>
        <h2>Abone ol</h2>
        <p>Bu inputu doldurarak bültenimize abone olabilisin</p>
        <input type="text" className="form-control" placeholder="mail" />
      </Modal>
      */}

      <Counter />
      <Timer />
      <Input />
      <Scroll />
    </div>
  );
};

export default App;
