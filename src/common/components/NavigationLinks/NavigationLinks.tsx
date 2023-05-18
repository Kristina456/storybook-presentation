import React from 'react';
import './NavigationLinks.scss';

interface Props {
  items: any[];
}

export function NavigationLinks({ items }: Props) {
  if (!items || items.length < 1) {
    return null;
  }

  return (
    <div className="nav-links">
      <ul className="nav-links__list">
        {items.map((item, index) => (
          <li key={index} className="nav-links__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
