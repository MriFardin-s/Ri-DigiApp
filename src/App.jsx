
import './App.css'
import CardSection from './components/CardSection/CardSection'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import StatsSection from './components/StatsSection'

function App() {
  

  return (
    <>
        <NavBar/>
        <br />
        <div className="border-b border-gray-300 w-full opacity-60"></div>
        <HeroSection/>
        <StatsSection/>
        <CardSection/>
    </>
  )
}

export default App
