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
import MarkIIPage from "./components/headphonesPage/MarkIIPage";

import { Advertisement } from "./components/sharedComponents/Advertisement";
import { Footer } from "./components/sharedComponents/Footer";
import { Routes, Route } from "react-router";
import HeadphonesHeader from "./components/headphonesPage/HeadphonesHeader";
import HeadphonesFirst from "./components/headphonesPage/HeadphonesFirst";
import HeadphonesSecond from "./components/headphonesPage/HeadphonesSecond";
import HeaphonesThird from "./components/headphonesPage/HeaphonesThird";
import SpeakersHeader from "./components/speakersPage/SpeakersHeader";
import SpeakersFirst from "./components/speakersPage/SpeakersFirst";
import SpeakersSecond from "./components/speakersPage/SpeakersSecond";
import EarphonesHeader from "./components/earphonesPage/EarphonesHeader";
import Earphones from "./components/earphonesPage/Earphones";
import MarkIIHeader from "./components/headphonesPage/MarkIIHeader";

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
              <HeadphonesFirst />
              <HeadphonesSecond />
              <HeaphonesThird />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/speakers"
          element={
            <>
              <SpeakersHeader />
              <SpeakersFirst />
              <SpeakersSecond />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/earphones"
          element={
            <>
              <EarphonesHeader />
              <Earphones />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/markII"
          element={
            <>
              <MarkIIHeader />
              <MarkIIPage />
            </>
          }
        />
      </Routes>
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
