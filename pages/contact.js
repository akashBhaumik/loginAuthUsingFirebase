import Banner from "../components/Banner";
import Title from "../components/Title";
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
      <>
      <Title title="Contact" />
      <Banner/>
      <div className={styles.container}>

      <h1 className="display-6 mb-3">Contact Page</h1>
      <p className="d-flex ">Lorem Ipsum is simply dummy text of the printing and 
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