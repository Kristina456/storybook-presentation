import React from 'react';
import styles from './NavigationLinks.module.scss';

interface Props {
  items: any[];
}

export function NavigationLinks({ items }: Props) {
  if (!items || items.length < 1) {
    return null;
  }

  return (
    <div className={styles['nav-links']}>
      <ul className={styles['nav-links__list']}>
        {items.map((item, index) => (
          <li key={index} className={styles['nav-links__item']}>
            <a href={`${item.href}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
