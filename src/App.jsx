
import './App.css'
import AboutMe from './components/Aboutme'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/myPort'
import DarkNav from './components/Navbar'
import SkillsComponent from './components/Skills'
import amongUs from "./assets/its-not-me.gif"


function App() {


  return (
    <>

      <DarkNav />
      <Header />

      <Main />
      <SkillsComponent />
      <AboutMe />
      <img className="cropped" src={amongUs} />
      
      <Footer />
    </>



  )
}

export default App
