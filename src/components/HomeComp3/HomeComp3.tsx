import { useNavigate } from 'react-router-dom';
import styles from "components/HomeComp3/HomeComp3.module.css";
import img1 from "components/HomeComp3/assets/Rectangle 27.png";
import img2 from "components/HomeComp3/assets/Rectangle 91.png";
import img3 from "components/HomeComp3/assets/Rectangle 92.png";
const HomeComp3 = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <div className={styles.vertical}>VERTICALS</div>
        <div className={styles.vertContent}>
          <div className={styles.vertContent1}>
            <img className={styles.contimage} src={img1} alt="" />
            <div>
              <p className={styles.capcontent}>BUZZ-BEE</p>
              <div className={styles["knowcontainer"]}>
                <p className={styles.know} onClick={()=>navigate("/verticals/buzzebee")}>know more</p>
              </div>
            </div>
          </div>
          <div className={styles.vertContent2}>
            <img className={styles.contimage} src={img2} alt="" />
            <div>
              <p className={styles.capcontent}>IT SERVICES & SOLUTIONS</p>
              <div className={styles["knowcontainer"]}>
                <p className={styles.know} onClick={()=>navigate("/verticals/itservice")}>know more</p>
              </div>
            </div>
          </div>
          <div className={styles.vertContent3}>
            <img className={styles.contimage} src={img3} alt="" />
            <div>
              <p className={styles.capcontent}>CYBER SECURITY</p>
              <div className={styles["knowcontainer"]}>
                <p className={styles.know} onClick={()=>navigate("/verticals/cyber")}>know more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp3;
