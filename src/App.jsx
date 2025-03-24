import Header from './components/HeaderComp.jsx'
import Main from './components/MainComp.jsx'
import Footer from './components/FooterComp.jsx'
import ComicsData from './assets/data/comics_data.js'
import MainNavData from './assets/data/mainnav_data.js'
import SubNavData from './assets/data/subnav_data.js'
function App() {

  return (
    <>
      <Header MainNavData={MainNavData} />
      <Main ComicsData={ComicsData} SubNavData={SubNavData} />
      <Footer />
    </>
  )
}

export default App
