import AulasList from './components/AulasList'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Infrastructure from './components/Infrastructure'

import PlanosList from './components/PlanosList'
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
      <Footer />
    </>
  )
}

export default App
