
import './App.css'
import CardSection from './components/CardSection/CardSection'
import Products from './components/CardSection/Products'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import StatsSection from './components/StatsSection'

const getProducts = async() => {
    const res = await fetch ("/cardData.json")
    
    return res.json()
}
 const productsPromise = getProducts()

function App() {
  

  return (
    <>
        <NavBar/>
        <br />
        <div className="border-b border-gray-300 w-full opacity-60"></div>
        <HeroSection/>
        <StatsSection/>
        <CardSection/>
         <Products productsPromise = {productsPromise} />
    </>
  )
}

export default App
