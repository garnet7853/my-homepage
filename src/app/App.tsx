import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Philosophy } from './components/Philosophy';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-gray-200 selection:text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Philosophy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
