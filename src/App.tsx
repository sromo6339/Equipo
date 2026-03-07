import Home from './pages/Home';
import ContactSection from './assets/components/Contactsection';
import Footer from './assets/components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Home />
      <section id="contacto">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
