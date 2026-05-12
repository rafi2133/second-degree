
import './App.css'
import About from './components/AboutUs/About'
import Banner from './components/Banner/Banner'
import BtnBgImg from './components/BtnBgImg/BtnBgImg'
import ChoosePlan from './components/ChoosePlan/ChoosePlan'
import Links from './components/Links/Links'
import NavBar from './components/NavBar/NavBar'
import RightSide from './components/RightSide/RightSide'

function App() {


  return (
    <>
    <NavBar></NavBar>
    {/* <RightSide></RightSide> */}
    <Banner></Banner>
    <ChoosePlan></ChoosePlan>
    <About></About>
    <BtnBgImg></BtnBgImg>
    <Links></Links>
    </>
  )
}

export default App
