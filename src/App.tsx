import './App.css'
import './index.css'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}

export default App
