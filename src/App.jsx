import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work' 
import Contact from './components/Contact'


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Banner />
        <About />
        <Work />
        <Contact />
      </div> 
    </>
  )
}

export default App
