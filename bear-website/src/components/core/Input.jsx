import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Input = forwardRef(({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  icon,
  iconPosition = 'left',
  fullWidth = true,
  className = '',
  ...props
}, ref) => {
  const { theme, activeCollection } = useTheme();
  
  // Generate an ID if none provided
  const inputId = id || `input-${name || Math.random().toString(36).substr(2, 9)}`;
  
  // Collection-specific input styles
  const collectionStyles = {
    primal: {
      borderWidth: '2px',
      focusStyles: {
        borderColor: theme?.colors?.accent || '#FF3A00',
        transform: 'translateY(-2px)',
      },
    },
    ethereal: {
      borderWidth: '1px',
      borderRadius: theme?.borderRadius?.pill || '9999px',
      focusStyles: {
        boxShadow: `0 0 0 2px ${theme?.colors?.accent || '#F0B9DD'}20`,
        borderColor: theme?.colors?.accent || '#F0B9DD',
      },
    },
    techno: {
      borderWidth: '1px',
      focusStyles: {
        borderColor: theme?.colors?.accent || '#FFF500',
        backgroundColor: `${theme?.colors?.background || '#0A0A14'}90`,
      },
    },
  };
  
  // Get styles for current collection
  const collectionStyle = collectionStyles[activeCollection] || collectionStyles.primal;
  
  // Base container styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: fullWidth ? '100%' : 'auto',
    marginBottom: theme?.spacing?.md || '16px',
  };
  
  // Label styles
  const labelStyle = {
    marginBottom: theme?.spacing?.sm || '8px',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: error ? (theme?.colors?.error || '#ff0000') : (theme?.colors?.text || '#F5F5F0'),
  };
  
  // Input wrapper styles
  const inputWrapperStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };
  
  // Icon styles
  const iconStyle = {
    position: 'absolute',
    [iconPosition === 'left' ? 'left' : 'right']: theme?.spacing?.sm || '8px',
    color: theme?.colors?.textAlt || '#BFB5A3',
    pointerEvents: 'none',
  };
  
  // Input styles
  const inputStyle = {
    width: '100%',
    padding: `${theme?.spacing?.sm || '8px'} ${theme?.spacing?.md || '16px'}`,
    paddingLeft: icon && iconPosition === 'left' ? `calc(${theme?.spacing?.md || '16px'} * 2 + 1rem)` : (theme?.spacing?.md || '16px'),
    paddingRight: icon && iconPosition === 'right' ? `calc(${theme?.spacing?.md || '16px'} * 2 + 1rem)` : (theme?.spacing?.md || '16px'),
    backgroundColor: theme?.colors?.surface || '#2A2A28',
    color: theme?.colors?.text || '#F5F5F0',
    border: `${collectionStyle.borderWidth} solid ${error ? (theme?.colors?.error || '#ff0000') : (theme?.colors?.textAlt || '#BFB5A3')}`,
    borderRadius: collectionStyle.borderRadius || (theme?.borderRadius?.md || '8px'),
    fontSize: '1rem',
    lineHeight: '1.5',
    transition: theme?.transitions?.normal || '0.3s ease-in-out',
    outline: 'none',
    appearance: 'none',
  };
  
  // Error message styles
  const errorStyle = {
    marginTop: theme?.spacing?.xs || '4px',
    color: theme?.colors?.error || '#ff0000',
    fontSize: '0.75rem',
  };
  
  // Help text styles
  const helpTextStyle = {
    marginTop: theme?.spacing?.xs || '4px',
    color: theme?.colors?.textAlt || '#BFB5A3',
    fontSize: '0.75rem',
  };
  
  // Input variants based on type
  const specialInputs = {
    textarea: (
      <textarea
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        ref={ref}
        className={className}
        style={{
          ...inputStyle,
          minHeight: '100px',
          resize: 'vertical',
        }}
        {...props}
      />
    ),
    checkbox: (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme?.spacing?.sm || '8px',
      }}>
        <input
          type="checkbox"
          id={inputId}
          name={name}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          ref={ref}
          className={className}
          style={{
            width: '1.25rem',
            height: '1.25rem',
            accentColor: theme?.colors?.primary || '#2D1E0F',
            cursor: 'pointer',
          }}
          {...props}
        />
        {label && (
          <label 
            htmlFor={inputId}
            style={{
              ...labelStyle,
              marginBottom: 0,
              cursor: 'pointer',
            }}
          >
            {label}
            {required && <span style={{ color: theme?.colors?.error || '#ff0000' }}>*</span>}
          </label>
        )}
      </div>
    ),
    // Add more special input types as needed (radio, date, etc.)
  };
  
  // If it's a special input type, render that directly
  if (specialInputs[type]) {
    return (
      <div style={containerStyle}>
        {type !== 'checkbox' && label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
            {required && <span style={{ color: theme?.colors?.error || '#ff0000' }}>*</span>}
          </label>
        )}
        
        {specialInputs[type]}
        
        {error && <div style={errorStyle}>{error}</div>}
        {helpText && !error && <div style={helpTextStyle}>{helpText}</div>}
      </div>
    );
  }
  
  // Default input type rendering
  return (
    <div style={containerStyle}>
      {label && (
        <label htmlFor={inputId} style={labelStyle}>
          {label}
          {required && <span style={{ color: theme?.colors?.error || '#ff0000' }}>*</span>}
        </label>
      )}
      
      <div style={inputWrapperStyle}>
        {icon && (
          <div style={iconStyle}>
            {icon}
          </div>
        )}
        
        <motion.input
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          ref={ref}
          className={className}
          style={inputStyle}
          whileFocus={collectionStyle.focusStyles}
          {...props}
        />
      </div>
      
      {error && <div style={errorStyle}>{error}</div>}
      {helpText && !error && <div style={helpTextStyle}>{helpText}</div>}
    </div>
  );
});

export default Input;