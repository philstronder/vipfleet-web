import { Home } from './components/Home';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

      <main>
        {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'fleet' && <Fleet />}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
