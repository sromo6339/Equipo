import { memo } from 'react';
import CTA from '../CTA/CTA';
import { servicesData } from '../../data/landingData';
import styles from './Servicios.module.css';

const Servicios = memo(function Servicios() {
  return (
    <section className={styles.section} id="servicios" aria-labelledby="servicios-title">
      <div className={styles.container}>
        <h2 id="servicios-title" className={styles.heading}>
          Soluciones para tu marca
        </h2>

        <div className={styles.grid}>
          {servicesData.map((service) => (
            <article key={service.id} className={styles.card}>
              <img
                src={service.image}
                alt={`Ilustración de ${service.title}`}
                className={styles.icon}
                loading="lazy"
                decoding="async"
              />

              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>

              <ul className={styles.list}>
                {service.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <CTA label={service.ctaLabel} whatsappText={service.whatsappText} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Servicios;
