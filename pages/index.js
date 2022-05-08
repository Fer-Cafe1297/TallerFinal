import styles from '../styles/HomePage.module.css'
import LayoutComponent from '../components/layout/LayoutComponent'
import CaroulselComponent from '../components/CaroulselComponent'
import ServicesComponent from '../components/ServicesComponent'
import CarouselInformative from '../components/CarouselInformative'

export const Home = () => {
  return (
    <LayoutComponent >
      <div className={styles.container}>
        <CaroulselComponent />
        <ServicesComponent/> 
        <CarouselInformative/>
      </div>
    </LayoutComponent>

  )
}
export default Home
