import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Smartphone, MessageCircle } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="card p-8 relative"
    >
      <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center font-bold shadow-lg">
        {number}
      </div>
      <div className="mb-6 text-primary-600 dark:text-primary-500">
        <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-gray-700 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-900/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get started in minutes with these three simple steps
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 dark:bg-gray-700 -translate-y-1/2 z-0" />
          
          <Step 
            icon={<Calendar size={32} />}
            number={1}
            title="Connect Your Calendar"
            description="Securely link your Google or Outlook calendar. No special permissions needed."
            delay={0.1}
          />
          
          <Step 
            icon={<Smartphone size={32} />}
            number={2}
            title="Set Your Preferences"
            description="Add your WhatsApp number and customize when you want to receive reminders."
            delay={0.2}
          />
          
          <Step 
            icon={<MessageCircle size={32} />}
            number={3}
            title="Get Reminders"
            description="Receive personalized WhatsApp reminders before your events at your preferred timing."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;