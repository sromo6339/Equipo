import { memo } from 'react';
import womanImage from '../../assets/images/web2026/mujer-redes.png';
import tabletImage from '../../assets/images/web2026/elemento-hero.png';
import topLogo from '../../assets/images/web2026/logo-superior.svg';

const navItems = [
  { id: 'innovation', label: 'Nosotros' },
  { id: 'conocenos', label: 'Servicios' },
  { id: 'marketing-info', label: 'Productos' },
  { id: 'contacto', label: 'Contactanos' },
];

const Hero = memo(function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden bg-[#ededee]">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 pt-6 md:px-10 lg:px-14">
        <div className="mb-2 flex items-start justify-between gap-4 md:mb-4">
          <img
            src={topLogo}
            alt="Equipu branding publicidad marketing"
            className="h-auto w-[170px] md:w-[230px] lg:w-[260px]"
            loading="eager"
            decoding="async"
          />

          <nav
            aria-label="Menu principal"
            className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-[15px] font-light text-[#7a7a7a] md:gap-x-6 md:text-[18px] lg:mr-3 lg:text-[40px] lg:leading-none"
          >
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-[#4b4b4b]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <section className="relative mx-auto min-h-[520px] md:min-h-[660px] lg:min-h-[720px]" aria-label="Hero Equipu">
          <img
            src={womanImage}
            alt="Mujer interactuando con redes sociales"
            className="pointer-events-none absolute bottom-0 left-[9%] z-10 h-auto w-[23vw] min-w-[170px] max-w-[320px]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <img
            src={tabletImage}
            alt="Tablet con logos de clientes"
            className="pointer-events-none absolute right-[15%] top-[10%] z-20 h-auto w-[18vw] min-w-[150px] max-w-[275px]"
            loading="eager"
            decoding="async"
          />

          <article
            className="pointer-events-none absolute inset-0 z-30 hidden md:block"
            style={{ fontFamily: "'Oswald','Arial Narrow',sans-serif" }}
          >
            <p className="absolute left-[22%] top-[28%] text-[clamp(24px,2.3vw,36px)] font-semibold leading-none tracking-tight text-black/32">
              360º
            </p>

            <h1 className="absolute left-[28%] top-[27%] text-[clamp(56px,6.5vw,106px)] font-black uppercase leading-[0.9] tracking-tight text-black">
              Publicidad
            </h1>

            <p className="absolute left-[30%] top-[48%] text-[clamp(26px,2.6vw,40px)] font-semibold leading-[0.95] text-black/28">
              Marcas Corporativo
            </p>

            <h2 className="absolute left-[40%] top-[40%] text-[clamp(84px,10vw,162px)] font-black uppercase leading-[0.9] tracking-tight text-black">
              Branding
            </h2>

            <h3 className="absolute left-[31%] top-[61%] text-[clamp(76px,8.4vw,132px)] font-black uppercase leading-[0.9] tracking-tight text-black">
              Marketing
            </h3>

            <p className="absolute left-[61%] top-[62%] text-[clamp(34px,3.6vw,54px)] font-semibold leading-[0.95] text-black/28">
              Offline Digital
            </p>

            <p className="absolute bottom-[9%] left-[44%] -translate-x-1/2 text-[clamp(48px,3.7vw,60px)] font-extrabold uppercase leading-none tracking-tight text-black">
              Equipu
            </p>
          </article>

          <article
            className="pointer-events-none absolute inset-0 z-30 md:hidden"
            style={{ fontFamily: "'Oswald','Arial Narrow',sans-serif" }}
          >
            <p className="absolute left-[18%] top-[22%] text-[24px] font-semibold leading-none text-black/35">360º</p>
            <h1 className="absolute left-[29%] top-[21%] text-[56px] font-black uppercase leading-[0.9] tracking-tight text-black">
              Publicidad
            </h1>
            <p className="absolute left-[24%] top-[46%] text-[28px] font-semibold leading-[0.92] text-black/30">
              Marcas Corporativo
            </p>
            <h2 className="absolute left-[34%] top-[39%] text-[82px] font-black uppercase leading-[0.9] tracking-tight text-black">
              Branding
            </h2>
            <h3 className="absolute left-[29%] top-[61%] text-[72px] font-black uppercase leading-[0.9] tracking-tight text-black">
              Marketing
            </h3>
            <p className="absolute left-[58%] top-[64%] text-[36px] font-semibold leading-[0.92] text-black/30">Offline Digital</p>
            <p className="absolute bottom-[12%] left-[47%] -translate-x-1/2 text-[46px] font-extrabold uppercase leading-none tracking-tight text-black">
              Equipu
            </p>
          </article>
        </section>
      </div>
    </header>
  );
});

export default Hero;
