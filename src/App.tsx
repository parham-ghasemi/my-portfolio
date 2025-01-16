import About from "./sections/about/About"
import Hero from "./sections/hero/Hero"
import NavBar from "./sections/navbar/NavBar"
import Projects from "./sections/projects/Projects"

function App() {
  return(
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
