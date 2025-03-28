import Banner from "./Banner/Banner"
import  Categories  from "./Categories/Categories"
import Companies from "./Companies/Companies"
// import  Footer  from "./Footer/Footer"
// import Header from "./Header/Header"
import Heroarea from "./Hero/Heroarea"
import Logo from "./LOGO/Logo"
import Offers from "./Offers/Offers"
import Section from "./Sectionarea/Section"

import "./Home.css"



export const Home = () => {
  return (
    <>
        <div className="home">
            {/* <Header /> */}
            <Logo />
            <Categories />
            <Section />
            <Companies />
            <Banner />
            <Heroarea />
            <Offers/>
            {/* <Footer /> */}
        </div>
    </>
  )
}

export default Home;
