import { memo } from 'react';
import styles from './LegacyTopNav.module.css';

type LegacyTopNavProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

const links = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'innovation', label: 'INNOVATION' },
  { id: 'conocenos', label: 'CONOCENOS' },
  { id: 'contacto', label: 'CONTACTO' },
];

const LegacyTopNav = memo(function LegacyTopNav({ activeSection, onNavigate }: LegacyTopNavProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegacion principal">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
});

export default LegacyTopNav;
