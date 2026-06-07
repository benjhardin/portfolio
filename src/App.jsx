import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Speaking from './components/Speaking'
import Articles from './components/Articles'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Speaking />
        <Articles />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  )
}
