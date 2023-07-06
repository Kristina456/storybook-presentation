import styles from './Footer.module.scss';

interface Props {
  copyrightText: string;
}

export function Footer({ copyrightText }: Props) {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__copyright"]}>{copyrightText}</div>
    </div>
  );
}
