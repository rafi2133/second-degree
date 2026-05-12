
import './App.css'
import About from './components/AboutUs/About'
import Banner from './components/Banner/Banner'
import ChoosePlan from './components/ChoosePlan/ChoosePlan'
import NavBar from './components/NavBar/NavBar'
import RightSide from './components/RightSide/RightSide'

function App() {


  return (
    <>
    <NavBar></NavBar>
    <RightSide></RightSide>
    <Banner></Banner>
    <ChoosePlan></ChoosePlan>
    <About></About>
    </>
  )
}

export default App
