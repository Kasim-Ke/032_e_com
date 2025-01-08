import HomeSecondSpeaker from "./components/HomeSecondSpeaker";
import HomeFristSpeaker from "./components/HomeFristSpeaker";
import HomeHero from "./components/HomeHero";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/Navbar";
import { Advertisement } from "./components/Advertisement";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeProducts />
      <HomeFristSpeaker />
      <HomeSecondSpeaker />
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
