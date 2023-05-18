import React from 'react';
import { Header } from '../static/components/Header/Header';
import './Home.scss';
import { Footer } from '../static/components/Footer/Footer';

type User = {
  name: string;
};

export const Home: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <div className="home">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        navigationLinks={['Home', 'About', 'Contact us']}
      />
      <section className="home__section">
        <h2 className="home__section-title">Home page</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad nisi
          delectus assumenda quisquam, nihil voluptas quam deserunt repudiandae
          explicabo quis et eum dicta necessitatibus voluptate optio velit
          consectetur pariatur! Voluptate, suscipit beatae repellendus explicabo
          eum, tempore qui ea, eos numquam sit quasi sint quae eaque adipisci
          maxime. Consequatur sunt unde quia expedita placeat magnam praesentium
          porro repellendus exercitationem. Iure adipisci vitae distinctio
          doloremque quaerat! Consequatur, numquam optio obcaecati fuga vero
          corrupti molestiae deleniti maxime ut labore non vitae. Ipsa quam illo
          corporis, excepturi tenetur recusandae cumque sunt officia molestiae
          eum et ullam explicabo nemo dicta dolorem reiciendis veniam asperiores
          provident harum nostrum fugiat minus. Illum voluptatem, a hic quod
          dignissimos ut quas est libero consectetur quaerat molestias aliquid
          eius, odit veritatis officia architecto quam similique? Similique
          distinctio a ea suscipit delectus, ipsa sint laborum molestiae beatae
          ullam ratione inventore dolor enim nulla perspiciatis recusandae eos
          nobis est ipsam officia!
        </div>
      </section>
      <footer>
        <Footer copyrightText="©2023 All rights reserved."></Footer>
      </footer>
    </div>
  );
};
