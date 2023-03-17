import CuresAtHome from "@/components/modules/home-page/CuresAtHome";
import CuresMostDiseases from "@/components/modules/home-page/CuresMostDiseases";
import Intro from "@/components/modules/home-page/Intro";
import NoSideEffects from "@/components/modules/home-page/NoSideEffects";
import OneDeviceForWholeLife from "@/components/modules/home-page/OneDeviceForWholeLife";

function HomePage(): JSX.Element {
  return (
    <>
      <Intro />
      <NoSideEffects />
      <CuresMostDiseases />
      <OneDeviceForWholeLife />
      <CuresAtHome />
    </>
  );
}

export default HomePage;
