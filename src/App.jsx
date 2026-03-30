
import './App.css'
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
    </>
  )
}

export default App
