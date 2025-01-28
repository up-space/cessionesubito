'use client'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quotation from "./components/Quotation";
import Products from "./components/Products";
import Features from "./components/Features";
import NotFound from './components/NotFound';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {[Hero, Quotation, Products, Features, NotFound, Footer].map((Component, index) => (
        <section 
          key={`section-${index}`}
          
        >
          <div>
            <Component />
          </div>
        </section>
      ))}
    </main>
  );
}
