import Header from './components/HeaderComp.jsx'
import Main from './components/MainComp.jsx'
import Footer from './components/FooterComp.jsx'
import ComicsData from './assets/data/comics_data.js'
import MainNavLinks from './assets/data/mainnav_links.js'
function App() {

  return (
    <>
      <Header MainNavData={MainNavLinks} />
      <Main />
      <Footer />
    </>
  )
}

export default App
