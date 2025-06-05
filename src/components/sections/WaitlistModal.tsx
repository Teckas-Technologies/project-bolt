import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md">
      {!isSuccess ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Be among the first to experience WhatsApp reminders for your calendar events.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
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
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Get early access + a free month when we launch
              </p>
            </div>
          </form>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6"
        >
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
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
    </Modal>
  );
};

export default WaitlistModal;