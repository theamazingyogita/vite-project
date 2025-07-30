import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Hero from './components/hero/hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import ContactUs from './components/ContactUs/ContactUs'
import Testimonials from './components/Testimonials/Testimonials'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='Our Program' title = 'What We Offer'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title = 'Campus Photo'/>
        <Campus/> 
        <Title subtitle='TESTIMONIALS' title = 'What Student Say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title = 'Get In Touch'/>
        <ContactUs/>
        <Footer/>
    </div>

    </div>
  )
}
export default App