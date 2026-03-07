import { memo } from 'react';
import { marketingInfoData } from '../../data/landingData';
import styles from './MarketingInfo.module.css';

const MarketingInfo = memo(function MarketingInfo() {
  return (
    <section className={styles.section} id="marketing-info" aria-labelledby="marketing-info-title">
      <div className={styles.container}>
        <h2 id="marketing-info-title" className={styles.title}>
          Apoya a tu empresa con marketing estratégico
        </h2>

        <div className={styles.grid}>
          {marketingInfoData.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default MarketingInfo;
