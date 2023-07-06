import React from 'react';
import { Footer, Header } from '../../components';
import styles from './About.module.scss';

type User = {
  name: string;
};

export const About = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <div className={styles['about']}>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <section className={styles['about__section']}>
        <h2 className={styles['about__section-title']}>About page</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad nisi
          delectus assumenda quisquam, nihil voluptas quam deserunt repudiandae
          explicabo quis et eum dicta necessitatibus voluptate optio velit
          consectetur pariatur! Voluptate, suscipit beatae repellendus explicabo
          eum, tempore qui ea, eos numquam sit quasi sint quae eaque adipisci
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
