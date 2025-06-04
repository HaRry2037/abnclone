import './App.css'
import Header from './components/header/header.jsx'
import HeroSection from './components/bedbanner/bedbanner.jsx'
import TopDestinations from './components/topdestination.jsx'
import PopularProperties from './mpproperty/mpproperty.jsx'
import PropertyAndStays from './typropnevents/typropnevents.jsx'
import Footer from './components/footer/footer.jsx'
import OurOffers from './offers/offers.jsx'
import Event from './event/event.jsx'
import OfferBanner from './offban/offban.jsx'
import DestinationsGrid from './travelsites/travs.jsx'
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TopDestinations />
      <PopularProperties />
      <PropertyAndStays />
      <OurOffers />
      <Event />
      <DestinationsGrid />
      <OfferBanner />
      <Footer />
    {/* this is the output */}
    </>
  )
}

export default App
