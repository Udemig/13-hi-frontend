import { useParams } from "react-router-dom";
import Input from "../../components/input";
import { statusOptions, typeOptions } from "../../utils/constants";
import styles from "./form.module.scss";

const Form = () => {
  const { id } = useParams();

  return (
    <div className={styles.formPage}>
      <section>
        <h2>{id ? "Başvuruyu Güncelle" : "Yeni Başvuru Oluştur"}</h2>

        <form>
          <Input label="Pozisyon" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Lokasyon" name="location" />
          <Input label="Durum" name="status" options={statusOptions} />
          <Input label="Tür" name="type" options={typeOptions} />
          <Input label="Tarih" name="date" type="date" />

          <div className={styles.btnWrapper}>
            <button>{id ? "Kaydet" : "Oluştur"}</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
