import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700',
    outline: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-primary-600 dark:text-primary-500 border border-primary-600 dark:border-primary-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4 gap-1.5',
    md: 'text-base py-3 px-6 gap-2',
    lg: 'text-lg py-4 px-8 gap-2.5',
  };
  
  const disabledClasses = disabled 
    ? 'opacity-60 cursor-not-allowed' 
    : 'hover:-translate-y-0.5 active:translate-y-0';

  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;