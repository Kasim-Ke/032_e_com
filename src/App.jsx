import Navbar from "./components/sharedComponents/Navbar";
import ScrollToTop from "./components/ScrollToTop";

{
  /*Homepage */
}
import HomeFristSpeaker from "./components/home/HomeFristSpeaker";
import HomeHero from "./components/home/HomeHero";
import HomeProducts from "./components/home/HomeProducts";
import HomeSecondSpeaker from "./components/home/HomeProducts";

{
  /*Headphonespage */
}

import { Advertisement } from "./components/sharedComponents/Advertisement";
import { Footer } from "./components/sharedComponents/Footer";
import { Routes, Route } from "react-router";
import HeadphonesHeader from "./components/headphonesPage/HeadphonesHeader";
import HeadphonestFrist from "./components/headphonesPage/HeadphonestFrist";
import HeadphonesSecond from "./components/headphonesPage/HeadphonesSecond";
import HeaphonesThird from "./components/headphonesPage/HeaphonesThird";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeHero />
              <HomeProducts />
              <HomeFristSpeaker />
              <HomeSecondSpeaker />
            </>
          }
        />
        <Route
          path="/headphones"
          element={
            <>
              <HeadphonesHeader />
              <HeadphonestFrist />
              <HeadphonesSecond />
              <HeaphonesThird />
              <HomeProducts />
            </>
          }
        />
        <Route path="/speakers" element={<></>} />
        <Route path="/earphones" element={<></>} />
      </Routes>
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
