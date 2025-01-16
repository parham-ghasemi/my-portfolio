import About from "./sections/about/About"
import Hero from "./sections/hero/Hero"
import NavBar from "./sections/navbar/NavBar"

function App() {
  return(
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App
