import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/input";
import { statusOptions, typeOptions } from "../../utils/constants";
import styles from "./form.module.scss";
import { useEffect, useState } from "react";
import api from "../../utils/service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createJob, updateJob } from "../../redux/slices/jobSlice";
import Loader from "../../components/loader/index";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // düzenleme modu için düzenlenicek elemanın verilerini al
  useEffect(() => {
    if (!id) return setEditItem(null);
    setLoading(true);

    api
      .get(`/jobs/${id}`)
      .then((res) => {
        setEditItem(res.data);
        setSelectedStatus(res.data.status);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki verileri bir nesne haline getir
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    if (!id) {
      // api'a yeni başvuru için istek at
      api.post("/jobs", jobData).then((res) => {
        // reducer'a haber ver
        dispatch(createJob(res.data));

        // yönlendir
        navigate("/");

        // bildirim gönder
        toast.success("Yeni başvuru oluşturuldu");
      });
    } else {
      // api'a başvuruyu güncellemek için istek at
      api.patch(`/jobs/${id}`, jobData).then((res) => {
        // reducer'a haber ver
        dispatch(updateJob(res.data));

        // yönlendir
        navigate("/");

        // bildirim gönder
        toast.success("Başvuru güncellendi");
      });
    }
  };

  // seçili status değerine göre tarih inputunun labelı belirle
  const dateLabel =
    selectedStatus === "Mülakat"
      ? "Mülakat Tarihi"
      : selectedStatus === "Reddedildi"
      ? "Reddedilme Tarihi"
      : selectedStatus === "Kabul Edildi"
      ? "Kabul Edilme Tarihi"
      : "Başvuru Tarihi";

  // seçili status değerine göre tarih inputunun name değerini belirle
  const dateName =
    selectedStatus === "Mülakat"
      ? "interview_date"
      : selectedStatus === "Reddedildi"
      ? "rejection_date"
      : selectedStatus === "Kabul Edildi"
      ? "accept_date"
      : "date";

  // stateuse göre date input'un type'ını belirle
  const dateType = selectedStatus === "Mülakat" ? "datetime-local" : "date";

  if (loading) return <Loader />;

  return (
    <div className={styles.formPage}>
      <section>
        <h2>{id ? "Başvuruyu Güncelle" : "Yeni Başvuru Oluştur"}</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" value={editItem?.position} />
          <Input label="Şirket" name="company" value={editItem?.company} />
          <Input label="Lokasyon" name="location" value={editItem?.location} />
          <Input
            label="Durum"
            name="status"
            options={statusOptions}
            handleChange={(e) => setSelectedStatus(e.target.value)}
            value={selectedStatus}
          />
          <Input label="Tür" name="type" options={typeOptions} value={editItem?.type} />
          <Input label={dateLabel} name={dateName} type={dateType} value={editItem?.[dateName]} />

          <div className={styles.btnWrapper}>
            <button>{id ? "Kaydet" : "Oluştur"}</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
