import CuresMostDiseases from "@/components/modules/home-page/CuresMostDiseases";
import Intro from "@/components/modules/home-page/Intro";
import NoSideEffects from "@/components/modules/home-page/NoSideEffects";

function HomePage(): JSX.Element {
  return (
    <>
      <Intro />
      <NoSideEffects />
      <CuresMostDiseases />
    </>
  );
}

export default HomePage;
