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
import MarkIIFeatures from "./components/headphonesPage/MarkIIFeatures";
import MarkIIGallery from "./components/headphonesPage/MarkIIGallery";
import MArkIIAlsoLike from "./components/headphonesPage/MArkIIAlsoLike";
import FristMarkPage from "./components/headphonesPage/FristMarkPage";
import FristMarkGallery from "./components/headphonesPage/FristMarkGallery";
import FristMarkAlso from "./components/headphonesPage/FristMarkAlso";
import FristMarkFeatures from "./components/headphonesPage/FristMarkFeatures";
import ThirdHeaphonespage from "./components/headphonesPage/ThirdHeaphonespage";
import ThirdFeatures from "./components/headphonesPage/ThirdFeatures";
import ThirdGallery from "./components/headphonesPage/ThirdGallery";
import ThirdAlsoLike from "./components/headphonesPage/ThirdAlsoLike";
import FirstSpeakerPage from "./components/speakersPage/product-zx9-speaker/FirstSpeakerPage";
import FirstSpeakerFeatures from "./components/speakersPage/product-zx9-speaker/FirstSpeakerFeatures";
import FirtsSpeakerGallery from "./components/speakersPage/product-zx9-speaker/FirtsSpeakerGallery";
import FirstSpeakerAlso from "./components/speakersPage/product-zx9-speaker/FirstSpeakerAlso";
import SecondSpeakerPage from "./components/speakersPage/product-zx7-speaker/SecondSpeakerPage";
import SecondSpeakerFeature from "./components/speakersPage/product-zx7-speaker/SecondSpeakerFeature";
import SecondSpeakerGallery from "./components/speakersPage/product-zx7-speaker/SecondSpeakerGallery";
import SecondSpeakerAlso from "./components/speakersPage/product-zx7-speaker/SecondSpeakerAlso";

function App() {
  return (
    <div className="overflow-x-hidden md:overflow-visible">
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
              <MarkIIFeatures />
              <MarkIIGallery />
              <MArkIIAlsoLike />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/fristMark"
          element={
            <>
              <MarkIIHeader />
              <FristMarkPage />
              <FristMarkFeatures />
              <FristMarkGallery />
              <FristMarkAlso />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/thirdMark"
          element={
            <>
              <MarkIIHeader />
              <ThirdHeaphonespage />
              <ThirdFeatures />
              <ThirdGallery />
              <ThirdAlsoLike />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/firstSpeaker"
          element={
            <>
              <MarkIIHeader />
              <FirstSpeakerPage />
              <FirstSpeakerFeatures />
              <FirtsSpeakerGallery />
              <FirstSpeakerAlso />
              <HomeProducts />
            </>
          }
        />
        <Route
          path="/secondSpeaker"
          element={
            <>
              <MarkIIHeader />
              <SecondSpeakerPage />
              <SecondSpeakerFeature />
              <SecondSpeakerGallery />
              <SecondSpeakerAlso />
              <HomeProducts />
            </>
          }
        />
      </Routes>
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
