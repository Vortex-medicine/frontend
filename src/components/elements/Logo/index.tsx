import Image from "next/image";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps): JSX.Element {
  return (
    <Image
      src="/logo.png"
      alt="Vortex-medicine"
      width="100"
      height="26"
      className={className}
    />
  );
}

export default Logo;
