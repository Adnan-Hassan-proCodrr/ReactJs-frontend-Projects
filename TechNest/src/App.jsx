import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Products from './sections/Products'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Products/>
    </>
  )
}

export default App