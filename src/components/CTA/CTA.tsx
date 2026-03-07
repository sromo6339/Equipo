import { memo } from 'react';
import styles from './CTA.module.css';

type CTAProps = {
  label: string;
  whatsappText: string;
};

const PHONE_NUMBER = '593999999999';

const CTA = memo(function CTA({ label, whatsappText }: CTAProps) {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <a href={href} className={styles.button} target="_blank" rel="noreferrer" aria-label={label}>
      {label}
    </a>
  );
});

export default CTA;
