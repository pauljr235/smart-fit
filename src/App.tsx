import AulasList from './components/AulasList'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Infrastructure from './components/Infrastructure'

import PlanosList from './components/PlanosList'
import SmartApp from './components/SmartApp'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <PlanosList />
      <Infrastructure />
      <AulasList />
      <SmartApp />
      <Footer />
    </>
  )
}

export default App
