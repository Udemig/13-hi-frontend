import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { Calendar, Delete, Edit, MapPin } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import api from "../../utils/service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../redux/slices/jobSlice";

// plugini aktif et
dayjs.extend(relativeTime);

// tükçe dilini ayarla
dayjs.locale("tr");

// Durum Componentı
const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Staj":
        return "var(--warning-color)";
      case "Tam Zamanlı":
        return "var(--primary-color)";
      case "Yarı Zamanlı":
        return "var(--danger-color)";
      case "Uzaktan":
        return "var(--success-color)";
      default:
        return "var(--text-muted)";
    }
  };

  return (
    <span
      className={styles.statusBadge}
      style={{
        "--status-color": getStatusColor(status),
        "--status-bg": getStatusColor(status) + "20",
      }}
    >
      {status}
    </span>
  );
};

// Card Componentı
const Card = ({ job }) => {
  const dispatch = useDispatch();

  // Tarihi formatla
  const date =
    job.status === "Devam Ediyor"
      ? dayjs(job.date).fromNow() + " başvuruldu"
      : job.status === "Reddedildi"
      ? dayjs(job.rejection_date).format("DD-MMMM") + " 'da reddildi"
      : job.status === "Mülakat"
      ? dayjs(job.interview_date).format("DD-MMMM HH:mm") + " 'de mülakat"
      : dayjs(job.accept_date).format("DD-MMMM") + " 'de kabul edildi";

  // Sil butonuna tıklanınca
  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    api
      .delete(`/jobs/${job.id}`)
      .then(() => {
        toast.success("Başvuru silindi");
        dispatch(deleteJob(job.id));
      })
      .catch(() => {
        toast.error("Silme işlemi başarısız");
      });
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div>
          <h1>
            <span>{job.company[0]}</span>
          </h1>

          <div className={styles.info}>
            <h2>{job.position}</h2>
            <h4>{job.company}</h4>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link to={`/edit/${job.id}`}>
            <button>
              <Edit />
            </button>
          </Link>

          <button onClick={handleDelete}>
            <Delete />
          </button>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.body}>
        <p>
          <MapPin />
          {job.location}
        </p>

        <div className={styles.bottom}>
          <span>
            <Calendar /> {date}
          </span>

          <StatusBadge status={job.type} />
        </div>
      </div>
    </div>
  );
};

export default Card;
