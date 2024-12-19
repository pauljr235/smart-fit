import AulasList from './components/AulasList'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <AulasList />
      <Footer />
    </>
  )
}

export default App
