import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About'
import BoostProductivity from './sections/BoostProductivity'
import Hero from './sections/Hero'
import Products from './sections/Products'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Products/>
      <BoostProductivity/>
    </>
  )
}

export default App