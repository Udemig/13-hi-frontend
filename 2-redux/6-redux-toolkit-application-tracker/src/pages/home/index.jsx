import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import Empty from "../../components/empty/index";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector((store) => store.jobReducer);

  /*
   * Sorun:
   Bir dizi içerisinde verileri status değerlerine göre gruplandırarak kategorize edilmiş diziler oluşturmak istiyoruz

   * Çözüm:
   Reducer dizi methodunu kullanarak dizi içerisindeki job nesnelerinin status değerlerine göre gruplamak
   */
  const grouped = jobs.reduce((grouped, job) => {
    // oluşturduğumuz nesnede status'e karşılık gelen dizi yoksa oluştur
    if (!grouped[job.status]) {
      grouped[job.status] = [];
    }

    // işin status değerine karşılık gelen diziye pushla
    grouped[job.status].push(job);

    // nesnenin son halini return et
    return grouped;
  }, {});

  console.log(grouped);
  console.log(Object.entries(grouped));

  if (isLoading) return <Loader />;

  if (error) return <Error info={error.message} />;

  if (jobs.length === 0) return <Empty />;

  return (
    <div>
      {/*
   * Sorun:
   Elimdeki veri nesne tipinde ve bu nesnenin bütün değerlerini ekrana basmak istiyoruz

   * Çözüm:
   Object.entries aracılığı ile nesne formatındaki veriyi diziye çeviririz ardından map ile döneriz
   */}
      <div className={styles.stack}>
        {Object.entries(grouped).map(([category, array], key) => (
          <div key={key} className={`${styles.group} fade-in-up`} style={{ animationDelay: `${key * 0.1}s` }}>
            <h1>{category}</h1>

            <div className={styles.list}>
              {array.map((job, key) => (
                <div key={key} className="stagger-item">
                  <Card job={job} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
