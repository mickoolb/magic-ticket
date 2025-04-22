
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import Features from '@/components/Home/Features';

import Testimonials from '@/components/Home/Testimonials';
import CTASection from '@/components/Home/CTASection';
import { getTicketAvailability, TICKET_CONFIG } from '@/utils/ticketUtils';
import { Progress } from '@/components/ui/progress';
import { Ticket, AlertCircle } from 'lucide-react';

const Index = () => {
  const [availability, setAvailability] = useState(getTicketAvailability());
  
  useEffect(() => {
    setAvailability(getTicketAvailability());
    const interval = setInterval(() => {
      setAvailability(getTicketAvailability());
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  
  const availabilityPercentage = (availability.available / TICKET_CONFIG.MAX_TICKETS) * 100;
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-magic-dark via-[#2c1e50] to-[#1a0f2e] relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237a42ff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative">
          <Hero />
          
          {/* Ticket Availability Bar - Now positioned below Hero */}
          <div className="bg-gradient-to-r from-magic/20 via-magic/30 to-magic/20 backdrop-blur-md border-y border-magic/30">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Ticket className="h-6 w-6 text-magic-gold" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Disponibilidad de Boletos</h3>
                    <p className="text-sm text-white/70">¡Asegura tu lugar ahora!</p>
                  </div>
                </div>
                
                <div className="flex-1 max-w-md">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Disponibles:</span>
                    <span className="text-sm font-semibold text-white">{availability.available} de {TICKET_CONFIG.MAX_TICKETS}</span>
                  </div>
                  <Progress 
                    value={availabilityPercentage} 
                    className="h-2 bg-magic/20" 
                  />
                </div>
                
                {availability.available < 20 && (
                  <div className="flex items-center gap-2 bg-magic-gold/20 backdrop-blur-sm border border-magic-gold/30 rounded-full px-4 py-2">
                    <AlertCircle className="h-4 w-4 text-magic-gold" />
                    <p className="text-sm text-magic-gold">¡Quedan pocos boletos!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <Testimonials />
          <CTASection />
          <Features />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
