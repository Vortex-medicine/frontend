import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/header/Header";

interface Props {
  children: React.ReactNode;
}

function Default({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Default;
