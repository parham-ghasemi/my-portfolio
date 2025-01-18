import { Toaster } from "react-hot-toast"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Hero from "./sections/hero/Hero"
import NavBar from "./sections/navbar/NavBar"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"

function App() {
  return(
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Toaster />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
