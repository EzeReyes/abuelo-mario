import SectionOne from '../components/SectionOne'
import About from '../components/About'
import SaltodeLinea from '../components/SaltodeLinea'
import Products from '../components/Products'
import TipsSection from '../components/TipsSection'
import InstagramEmbebed from '../components/InstagramEmbebed'
import SectionTwo from '../components/SectionTwo'
import ContactForm from '../components/ContactForm'
import BtnWsp from '../components/BtnWsp'
import New from '../components/New'

export default function Home() {
  return (
    <>
      <SectionOne />
      <About />
      <New />
      <Products />
      <TipsSection />
      <InstagramEmbebed />
      <SectionTwo />
      <BtnWsp />
      <ContactForm />
    </>
  )
}
