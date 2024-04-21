import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
        <Title  subTitle='Our Program' title = 'We We Offer'/>
        <Programs /> 
        <About />
        <Title subTitle="Galery" title="Campus Photos"/>
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students Says"/>
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch"/>
        <Contact />
        <Footer />
        </div>
     
    </div>
  )
}

export default App