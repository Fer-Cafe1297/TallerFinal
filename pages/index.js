import styles from '../styles/HomePage.module.css'
import LayoutComponent from '../components/layout/LayoutComponent'
import CaroulselComponent from '../components/CaroulselComponent'
import ServicesComponent from '../components/ServicesComponent'

export const Home = () => {
  return (
    <LayoutComponent >
      <div className={styles.container}>
        <CaroulselComponent />
        <ServicesComponent/> 
      </div>
    </LayoutComponent>

  )
}
export default Home
