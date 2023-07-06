import React from 'react';
import styles from './Header.module.scss';
import { Button, NavigationLinks } from '../../../../common/components';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) {
  return (
    <header className={styles['header']}>
      <NavigationLinks
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: 'about' },
        ]}
      />
      <div className={styles['header__buttons']}>
        {user ? (
          <>
            <span className={styles['header__welcome-text']}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </header>
  );
}
