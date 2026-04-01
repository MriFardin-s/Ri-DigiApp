
import './App.css'
import CardSection from './components/CardSection/CardSection'
import Products from './components/CardSection/Products'
import CartSection from './components/CardSection/CartSection'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import StatsSection from './components/StatsSection'
import { useState } from 'react'
import PosterSection from './components/PosterSection/PosterSection'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import Footer from './components/FooterSection/Footer'


const getProducts = async () => {
  const res = await fetch("/cardData.json")

  return res.json()
}
const productsPromise = getProducts()

function App() {
    const [activeTab, setActiveTab] = useState("Products")
    const [carts , setCarts] = useState([])
    const handleRemove = (id) => {
        const remainingCarts = carts.filter(item => item.id !== id);
        setCarts(remainingCarts);
    };

  return (
    <>
    <header>
      <NavBar cartCount={carts.length} setActiveTab={setActiveTab} />
    </header>
      
      <br />
      <div className="border-b border-gray-300 w-full opacity-60"></div>
      <HeroSection />
      <StatsSection />
      <CardSection />
     
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-gray-600"}`} aria-label="Products " onClick={() => setActiveTab("Products")} defaultChecked />
        <input type="radio" name="my_tabs_1"  className={`tab rounded-full w-40 ${activeTab === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-gray-600"}`}  onClick={() => setActiveTab("Cart")} aria-label={`Cart (${carts.length})`}  />
        
      </div>
      
      {activeTab === "Products" ? <Products setCarts = {setCarts}
       carts ={carts}  productsPromise={productsPromise}  /> : null}

      {activeTab === "Cart" ?<CartSection carts ={carts} handleRemove={handleRemove} setCarts={setCarts} /> : null }
      <GetStarted/>
      
      <Pricing/>
      <PosterSection/>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
