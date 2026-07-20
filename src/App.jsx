import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
