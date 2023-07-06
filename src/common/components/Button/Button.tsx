import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const buttonStyle = classNames(
    styles['button'],
    styles[`button--${size}`],
    primary ? styles['button--primary'] : styles['button--secondary']
  );

  return (
    <button type="button" className={buttonStyle} {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
