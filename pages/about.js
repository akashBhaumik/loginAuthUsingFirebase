import Image from "next/image";
import Banner from "../components/Banner";
import styles from '../styles/Home.module.css'
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Title title="About" />
      <Image src="/../public/images/ieland.jpg" width={1920} height={600} />
      <div className={styles.container}>
        <h1 className="display-6 mb-3">About Page</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting,
          remaining essentially unchanged. </p>
      </div>
    </>
  )
}
