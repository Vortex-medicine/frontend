import styles from "./styles.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps): JSX.Element {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default Container;
