import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComp.jsx'
import Main from './components/MainComp.jsx'
import Footer from './components/FooterComp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
