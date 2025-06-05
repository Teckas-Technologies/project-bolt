import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bell, Check, Calendar, Clock } from 'lucide-react';
import Button from '../ui/Button';
import WaitlistModal from './WaitlistModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface WhatsAppMessage {
  type: 'incoming' | 'outgoing';
  content: string;
  time: string;
  isEvent?: boolean;
  eventDetails?: {
    title: string;
    time: string;
  };
}

const conversations = [
  {
    title: "Work Reminder",
    messages: [
      {
        type: 'incoming',
        content: "👋 Hi! Here's your upcoming event:",
        time: "9:30 AM",
        isEvent: true,
        eventDetails: {
          title: "Client Meeting",
          time: "Today at 10:00 AM"
        }
      },
      {
        type: 'incoming',
        content: "Would you like a reminder 15 minutes before?",
        time: "9:30 AM"
      },
      {
        type: 'outgoing',
        content: "Yes, please!",
        time: "9:31 AM"
      },
      {
        type: 'incoming',
        content: "Great! I'll remind you at 9:45 AM",
        time: "9:31 AM"
      }
    ]
  },
  {
    title: "Study Session",
    messages: [
      {
        type: 'incoming',
        content: "Don't forget your study session:",
        time: "1:30 PM",
        isEvent: true,
        eventDetails: {
          title: "Physics Group Study",
          time: "Today at 2:00 PM"
        }
      },
      {
        type: 'outgoing',
        content: "Can you remind me 30 mins before?",
        time: "1:31 PM"
      },
      {
        type: 'incoming',
        content: "Of course! I'll ping you at 1:30 PM",
        time: "1:31 PM"
      }
    ]
  },
  {
    title: "Doctor's Appointment",
    messages: [
      {
        type: 'incoming',
        content: "Important reminder:",
        time: "2:00 PM",
        isEvent: true,
        eventDetails: {
          title: "Dr. Smith Appointment",
          time: "Tomorrow at 3:30 PM"
        }
      },
      {
        type: 'incoming',
        content: "Would you like me to remind you an hour before?",
        time: "2:00 PM"
      },
      {
        type: 'outgoing',
        content: "Yes, and also 15 mins before please",
        time: "2:01 PM"
      },
      {
        type: 'incoming',
        content: "✅ Set! You'll get reminders at 2:30 PM and 3:15 PM",
        time: "2:01 PM"
      }
    ]
  }
];

const WhatsAppMessage: React.FC<{ message: WhatsAppMessage; delay: number }> = ({ message, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`flex ${message.type === 'outgoing' ? 'justify-end' : 'justify-start'} mb-2`}
  >
    <div
      className={`max-w-[80%] rounded-lg p-3 ${
        message.type === 'outgoing'
          ? 'bg-primary-500 text-white'
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      {message.isEvent ? (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary-600 dark:text-primary-400" />
            <span className="font-medium text-primary-600 dark:text-primary-400">
              {message.eventDetails?.title}
            </span>
          </div>
          <p className="text-sm">{message.eventDetails?.time}</p>
        </div>
      ) : (
        <p>{message.content}</p>
      )}
      <p className="text-xs mt-1 opacity-70">{message.time}</p>
    </div>
  </motion.div>
);

const WhatsAppCard: React.FC<{ conversation: typeof conversations[0] }> = ({ conversation }) => (
  <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
    {/* WhatsApp Header */}
    <div className="bg-primary-600 text-white p-4">
      <div className="text-sm opacity-80">Reminder Agent</div>
      <div className="text-base font-medium">{conversation.title}</div>
    </div>
    
    {/* Messages Container */}
    <div className="p-4 space-y-2 bg-[url('https://i.imgur.com/8UdKNS4.png')] bg-cover min-h-[400px]">
      {conversation.messages.map((message, index) => (
        <WhatsAppMessage
          key={index}
          message={message}
          delay={index * 0.2}
        />
      ))}
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm mb-6"
            >
              <Bell size={14} className="mr-1.5" />
              <span>Now accepting early access sign-ups</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Never miss <span className="text-primary-600 dark:text-primary-500">what matters.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Get WhatsApp reminders for your calendar events. No app. Just peace of mind.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={openModal}
                icon={<ArrowRight />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Join the Waitlist
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right content - WhatsApp Conversations */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm mx-auto"
            >
              {/* Background decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Swipeable WhatsApp Cards */}
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-full"
              >
                {conversations.map((conversation, index) => (
                  <SwiperSlide key={index}>
                    <WhatsAppCard conversation={conversation} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;