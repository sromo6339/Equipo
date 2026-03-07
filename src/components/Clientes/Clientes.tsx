import { memo, useMemo } from 'react';
import styles from './Clientes.module.css';

const logoModules = import.meta.glob('../../assets/images/web2026/logos/*.svg', {
  eager: true,
}) as Record<string, { default: string }>;

const logos = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

const Clientes = memo(function Clientes() {
  const items = useMemo(() => logos, []);

  return (
    <section className={styles.section} id="clientes" aria-labelledby="clientes-title">
      <div className={styles.container}>
        <h2 id="clientes-title" className={styles.title}>
          Marcas que confían en nosotros
        </h2>
        <div className={styles.grid}>
          {items.map((logo, index) => (
            <figure key={logo} className={styles.logoItem}>
              <img
                src={logo}
                alt={`Logo de empresa ${index + 1}`}
                loading="lazy"
                decoding="async"
                className={styles.logo}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Clientes;
