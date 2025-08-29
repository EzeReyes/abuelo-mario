import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import InstagramEmbebed from './components/InstagramEmbebed'
import Navbar from './components/Navbar'
import Products from './components/Products'
import SaltodeLinea from './components/SaltodeLinea'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import TipsSection from './components/TipsSection'

function App() {

  return (
    <>
      <Navbar />
      <SectionOne />
      <About />
      <SaltodeLinea />
      <Products />
      <TipsSection />
      <InstagramEmbebed />
      <SectionTwo />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
