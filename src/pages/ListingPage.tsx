import HeroSection from '../sections/heroSection/HeroSection'
import CauroselSection from '../sections/caurosel/CauroselSection'
import SubHeroSection from '../sections/subHero/SubHeroSection'
import SecondSubHero from '../sections/secondSubHero/SecondSubHero'
import SecondCaurosel from '../sections/secondCaurosel/SecondCaurosel'
import BigCard from '../sections/BigCard/BigCard'
import CardsOfCards from '../sections/cardsOfCards/CardsOfCards'

const ListingPage = () => {
  return (
    <div><HeroSection />
    <CauroselSection/>
    <CardsOfCards/>
    <SubHeroSection/>
    <SecondSubHero/>
    <SecondCaurosel/>
    <BigCard/>
    </div>
    
  )
}

export default ListingPage