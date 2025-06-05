import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, answer, isOpen, onToggle, delay 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="border-b border-gray-200 dark:border-gray-700 last:border-0"
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 dark:text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Will you spam me?",
      answer: "Absolutely not. We only send reminders for your scheduled events and occasional product updates. You can customize exactly what you receive and when."
    },
    {
      question: "Do I need to install anything?",
      answer: "No installations needed! Reminder Agent works through WhatsApp, which you already have. Just connect your calendar and we handle the rest."
    },
    {
      question: "Can I use this for school or coaching?",
      answer: "Yes! Reminder Agent is perfect for students, teachers, coaches, and parents who need to keep track of classes, assignments, practices, and other scheduled events."
    },
    {
      question: "How much will it cost?",
      answer: "We're finalizing our pricing, but early waitlist members will receive a free month when we launch. We're committed to keeping it affordable for individuals."
    },
    {
      question: "Is my calendar data secure?",
      answer: "Your privacy and security are our top priorities. We only access the specific calendar events needed to send reminders, use industry-standard encryption, and never share your data with third parties."
    },
    {
      question: "What calendars do you support?",
      answer: "We currently support Google Calendar and Microsoft Outlook. We plan to add support for Apple Calendar, Proton Calendar, and other popular providers soon after launch."
    }
  ];
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="faq" className="section" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about Reminder Agent
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800/20 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;