import './App.css'
import Header from './components/header/header.jsx'
import HeroSection from './components/bedbanner/bedbanner.jsx'
import TopDestinations from './components/topdestination.jsx'
import PopularProperties from './mpproperty/mpproperty.jsx'
import PropertyAndStays from './typropnevents/typropnevents.jsx'
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TopDestinations />
      <PopularProperties />
      <PropertyAndStays />
    {/* this is the output */}
    </>
  )
}

export default App
