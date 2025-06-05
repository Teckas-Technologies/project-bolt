import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

const WaitlistForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };
  
  return (
    <section id="waitlist" className="section bg-primary-600 dark:bg-primary-900" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to stop missing what matters?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join our waitlist today and get early access when we launch.
            </p>
            
            {!isSuccess ? (
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="form-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        className={`input ${errors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                        placeholder="Enter your name"
                        {...register('name', { required: 'Name is required' })}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="form-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        className={`input ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                        placeholder="you@example.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight size={20} />}
                    iconPosition="right"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                  </Button>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                    Get early access + a free month when we launch
                  </p>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We'll notify you when Reminder Agent is ready for you to try.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;