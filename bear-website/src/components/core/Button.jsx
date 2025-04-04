import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const { theme, activeCollection } = useTheme();
  
  // Button sizing
  const sizes = {
    small: {
      padding: `${theme?.spacing?.xs || '4px'} ${theme?.spacing?.md || '16px'}`,
      fontSize: '0.875rem',
    },
    medium: {
      padding: `${theme?.spacing?.sm || '8px'} ${theme?.spacing?.lg || '32px'}`,
      fontSize: '1rem',
    },
    large: {
      padding: `${theme?.spacing?.md || '16px'} ${theme?.spacing?.xl || '64px'}`,
      fontSize: '1.125rem',
    },
  };
  
  // Button variants
  const variants = {
    primary: {
      backgroundColor: theme?.colors?.primary || '#2D1E0F',
      color: theme?.colors?.background || '#1A1A18',
      border: 'none',
      hoverStyles: {
        backgroundColor: theme?.colors?.accent || '#FF3A00',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme?.colors?.primary || '#2D1E0F',
      border: `2px solid ${theme?.colors?.primary || '#2D1E0F'}`,
      hoverStyles: {
        backgroundColor: theme?.colors?.primary || '#2D1E0F',
        color: theme?.colors?.background || '#1A1A18',
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme?.colors?.text || '#F5F5F0',
      border: 'none',
      hoverStyles: {
        color: theme?.colors?.accent || '#FF3A00',
      },
    },
  };
  
  // Button animation based on collection theme
  const buttonAnimations = {
    primal: {
      whileHover: { scale: 1.05, transition: { duration: 0.2 } },
      whileTap: { scale: 0.95 },
    },
    ethereal: {
      whileHover: { 
        y: -5, 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
        transition: { duration: 0.3, ease: 'easeOut' } 
      },
      whileTap: { y: 0, boxShadow: 'none' },
    },
    techno: {
      whileHover: { 
        backgroundColor: theme?.colors?.accent || '#FFF500',
        color: theme?.colors?.background || '#0A0A14',
        transition: { duration: 0.2 } 
      },
      whileTap: { scale: 0.98 },
    },
  };
  
  // Get animation for current collection
  const animation = buttonAnimations[activeCollection] || buttonAnimations.primal;
  
  // Base styles
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme?.spacing?.sm || '8px',
    borderRadius: theme?.borderRadius?.[theme?.imagery?.cornerStyle === 'jagged' ? 'none' : 'md'] || '8px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: theme?.transitions?.normal || '0.3s ease-in-out',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    ...sizes[size],
    ...variants[variant],
  };
  
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={buttonStyle}
      className={className}
      {...animation}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && (
        <span className="button-icon">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;