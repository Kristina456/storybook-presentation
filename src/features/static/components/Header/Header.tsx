import React from 'react';
import './Header.scss';
import { Button, NavigationLinks } from '../../../../common/components';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  navigationLinks: any;
}

export function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  navigationLinks,
}: HeaderProps) {
  return (
    <header className="header">
      <NavigationLinks items={navigationLinks} />
      <div className="header__buttons">
        {user ? (
          <>
            <span className="welcome">
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
