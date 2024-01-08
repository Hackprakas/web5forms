import {LandingHero} from '../components/landinghero';
import { LandingNavBar } from '../components/landingnavbar';

export default function Home() {
  return (
     <div className="h-full">
         <LandingNavBar />
         <LandingHero />
      </div>
  )
}
