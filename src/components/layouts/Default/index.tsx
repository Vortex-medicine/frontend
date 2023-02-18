import Header from "@/components/modules/Header";

interface Props {
  children: React.ReactNode;
}

function Default({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Default;
