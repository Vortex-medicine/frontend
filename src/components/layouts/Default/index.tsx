import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/header/Header";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
