import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

const avatars = [
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
];

const Testimonial: React.FC<TestimonialProps & { avatarUrl: string }> = ({ 
  quote, author, role, delay, avatarUrl 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-800/20 relative"
    >
      <div className="mb-4 text-primary-500 dark:text-primary-400">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.667 13.3333H5.33366C5.33366 8 9.33366 6.66667 11.3337 6C11.3337 9.33333 9.33366 10.6667 9.33366 13.3333C9.33366 16 11.3337 17.3333 13.3337 17.3333C15.3337 17.3333 17.3337 15.3333 17.3337 13.3333C17.3337 11.3333 15.3337 9.33333 13.3337 9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.667 13.3333H21.3337C21.3337 8 25.3337 6.66667 27.3337 6C27.3337 9.33333 25.3337 10.6667 25.3337 13.3333C25.3337 16 27.3337 17.3333 29.3337 17.3333C31.3337 17.3333 33.3337 15.3333 33.3337 13.3333C33.3337 11.3333 31.3337 9.33333 29.3337 9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={avatarUrl} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            What People Are Saying
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From forgetful freelancers to busy parents, our users love their newfound peace of mind
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Testimonial 
            quote="I was constantly missing client meetings because I'd forget to check my calendar. Now I get WhatsApp reminders and haven't missed a single one!"
            author="Sarah Johnson"
            role="Freelance Designer"
            delay={0.1}
            avatarUrl={avatars[0]}
          />
          
          <Testimonial 
            quote="As a parent juggling work and kids, I kept forgetting important school events. Reminder Agent has been a lifesaver for our family schedule."
            author="Michael Chen"
            role="Software Engineer"
            delay={0.2}
            avatarUrl={avatars[1]}
          />
          
          <Testimonial 
            quote="I love that I don't need another app. It just works with my calendar and sends reminders right to WhatsApp. Simple and effective!"
            author="Priya Sharma"
            role="Marketing Consultant"
            delay={0.3}
            avatarUrl={avatars[2]}
          />
          
          <Testimonial 
            quote="Between classes, study groups, and part-time work, I was missing appointments all the time. Now I get reminders exactly when I need them."
            author="James Wilson"
            role="Graduate Student"
            delay={0.4}
            avatarUrl={avatars[3]}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;