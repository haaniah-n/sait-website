import Image from "next/image";
import styles from "./sait-logo.module.css";

export function SaitLogo({ className = "", alt = "" }: { className?: string; alt?: string }) {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <Image src="/images/sait-logo-dark.png" alt={alt} fill sizes="112px" loading="eager" className={styles.dark} />
      <Image src="/images/sait-logo-light.png" alt={alt} fill sizes="112px" loading="eager" className={styles.light} />
    </div>
  );
}
