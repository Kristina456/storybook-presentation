import styles from './Footer.module.scss';

interface Props {}

export function Footer() {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__copyright']}>
        ©2023 All rights reserved.
      </div>
    </div>
  );
}
