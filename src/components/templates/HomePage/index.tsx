import CanBeTakenOnTrip from "@/components/modules/home-page/CanBeTakenOnTrip";
import Course from "@/components/modules/home-page/Course";
import CuresAtHome from "@/components/modules/home-page/CuresAtHome";
import CuresMostDiseases from "@/components/modules/home-page/CuresMostDiseases";
import EasyToUse from "@/components/modules/home-page/EasyToUse";
import Intro from "@/components/modules/home-page/Intro";
import NoSideEffects from "@/components/modules/home-page/NoSideEffects";
import OneDeviceForWholeLife from "@/components/modules/home-page/OneDeviceForWholeLife";
import ReviewsFromSkype from "@/components/modules/home-page/ReviewsFromSkype";
import ShareTechnologyWithFriends from "@/components/modules/home-page/ShareTechnologyWithFriends";
import WellnessMagazine from "@/components/modules/home-page/WellnessMagazine";
import WhatElseToExplore from "@/components/modules/home-page/WhatElseToExplore";

function HomePage(): JSX.Element {
  return (
    <>
      <Intro />
      <NoSideEffects />
      <CuresMostDiseases />
      <OneDeviceForWholeLife />
      <CuresAtHome />
      <CanBeTakenOnTrip />
      <EasyToUse />
      <ReviewsFromSkype />
      <WellnessMagazine />
      <Course />
      <WhatElseToExplore />
      <ShareTechnologyWithFriends />
    </>
  );
}

export default HomePage;
