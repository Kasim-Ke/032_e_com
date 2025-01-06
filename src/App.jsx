import HomeSecondSpeaker from "./components/HomeSecondSpeaker";
import HomeFristSpeaker from "./components/HomeFristSpeaker";
import HomeHero from "./components/HomeHero";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeProducts />
      <HomeFristSpeaker />
      <HomeSecondSpeaker />
    </>
  );
}

export default App;
