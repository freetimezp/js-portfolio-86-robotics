import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import FunFacts from "./components/funfacts/FunFacts";
import AboutUs from "./components/aboutus/AboutUs";
import FocusBase from "./components/focusbase/FocusBase";
import Services from "./components/services/Services";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <FunFacts />
      <AboutUs />
      <FocusBase />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
