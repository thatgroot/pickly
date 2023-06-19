import { BuyPickles } from "./components/BuyPickles";
import { Footer } from "./components/Footer";
import { Futilities } from "./components/Futilities";
import Hero from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { PickleBanner } from "./components/PickleBanner";
import PickleNomics from "./components/PickleNomics";
import PickleStatistics from "./components/PickleStatistics";
import { RoadMap } from "./components/RoadMap";
import { SubscriptionForm } from "./components/SubscriptionForm";
import { WalletBanner } from "./components/WalletsBanner";

function App() {

  return (
    <div className="flex flex-col w-full overflow-hidden scroll-smooth">
      <Navigation />

      <Hero/>
      <SubscriptionForm/>
      <BuyPickles/>
      <PickleBanner/>
      <WalletBanner/>
      <PickleNomics/>
      <Futilities/>
      <PickleStatistics/>
      <RoadMap/>
      <Footer/>
    </div>
  );
}
export default App;
