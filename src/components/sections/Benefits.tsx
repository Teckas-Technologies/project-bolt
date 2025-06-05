import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Zap, Shield, Users } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-800/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="benefits" className="section" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Why It's <span className="text-primary-600 dark:text-primary-500">Better</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built for humans, not teams. Simple, reliable reminders that just work.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Benefit 
            icon={<Clock size={24} />}
            title="No Logins to Check"
            description="Skip the apps. Get reminders right where you already spend your time — WhatsApp."
            delay={0.1}
          />
          
          <Benefit 
            icon={<Zap size={24} />}
            title="No Missed Meetings"
            description="Timely reminders that arrive exactly when you need them, not buried in notifications."
            delay={0.2}
          />
          
          <Benefit 
            icon={<Shield size={24} />}
            title="Privacy First"
            description="We only access the calendar events you need reminders for. Your data stays yours."
            delay={0.3}
          />
          
          <Benefit 
            icon={<Users size={24} />}
            title="Personal Touch"
            description="Customized for individuals, not bloated with team features you'll never use."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;