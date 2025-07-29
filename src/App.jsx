import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Hero from './components/hero/hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

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
    </div>

    </div>
  )
}
export default App