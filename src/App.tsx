import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import WaitlistForm from './components/sections/WaitlistForm';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          <main>
            <Hero />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <WaitlistForm />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;