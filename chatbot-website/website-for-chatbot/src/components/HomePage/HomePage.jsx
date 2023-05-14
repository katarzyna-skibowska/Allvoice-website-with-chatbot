import styles from "./HomePage.module.css";
import avaya1 from "../../assets/avaya1.jpg";

export const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section>
          <img src={avaya1} alt="avaya" className={styles.img} />
        </section>
        <section className={styles.text}>
          <h3>TALK. CHAT. COLLABORATE. </h3>
          <h1>Communicate Easily</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor.
          </p>
        </section>
      </div>
    </>
  );
};
