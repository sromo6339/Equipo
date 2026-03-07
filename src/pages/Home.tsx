import { useEffect, memo } from 'react';
import Hero from '../components/Hero/Hero.jsx';
import Clientes from '../components/Clientes/Clientes';
import Servicios from '../components/Servicios/Servicios';
import MarketingInfo from '../components/MarketingInfo/MarketingInfo';
import styles from './Home.module.css';

const Home = memo(function Home() {
  useEffect(() => {
    document.title = 'Equipu | Publicidad, Branding y Marketing';

    const description =
      'Landing de Equipu con servicios de branding, publicidad y marketing digital para empresas y emprendedores.';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, []);

  return (
    <main className={styles.page}>
      <Hero />
      <section id="innovation">
        <Clientes />
      </section>
      <section id="conocenos">
        <Servicios />
      </section>
      <MarketingInfo />
    </main>
  );
});

export default Home;
