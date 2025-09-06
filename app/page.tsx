
import Navbar from "./components/NavBar"; 
import HeroSection from "./components/HeroSection";
import AboutUs from './components/AboutUs';
import Repairs from './components/Repairs';
import Review from './components/Review';
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
     {/*navbar start */}
    <Navbar />

    {/*hero section start*/}
      <HeroSection />

    {/*About Us section start*/}
    <AboutUs />

    {/*services section start*/}
    <Repairs/>
  
    {/*reviews section start*/}
    <Review/>

    {/*footer section start*/}
  <Footer />
    </>
  )

}
