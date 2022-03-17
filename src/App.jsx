import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
