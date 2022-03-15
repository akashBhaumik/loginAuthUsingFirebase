
import Banner from '../components/Banner'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <Title title="Home" />
    <Banner/>
    <div className={styles.container}>
    <h1 className="display-6 mb-3">Home Page</h1>
    </div>
    </>
  )
}
