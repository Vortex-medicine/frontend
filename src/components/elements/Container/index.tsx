import classnames from "classnames";
import styles from "./styles.module.scss";
import { forwardRef, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, className = "" }: ContainerProps,
  ref
): JSX.Element {
  const containerClasses = classnames(styles.container, className);

  return (
    <div ref={ref} className={containerClasses}>
      {children}
    </div>
  );
});

export default Container;
