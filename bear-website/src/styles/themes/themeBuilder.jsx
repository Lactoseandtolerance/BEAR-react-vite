const createCollectionTheme = (collectionId) => {
    // Base theme with BEAR brand constants
    const baseTheme = {
      fontFamily: "'Monument Extended', sans-serif",
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '16px',
        pill: '9999px',
      },
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      transitions: {
        fast: '0.2s ease',
        normal: '0.3s ease-in-out',
        slow: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        intensity: '0.4s cubic-bezier(0.85, 0, 0.15, 1)',
      },
      // Constants that represent BEAR's bold identity, regardless of collection
      constants: {
        headerHeight: '80px',
        footerHeight: '300px',
        maxWidth: '1440px',
      }
    };
  
    // Collection-specific theme extensions
    const collectionThemes = {
      'primal': {
        // Primal collection with raw, earthy aesthetics
        name: 'Primal',
        colors: {
          primary: '#2D1E0F',       // Deep earth brown
          secondary: '#D66F00',     // Burnt orange
          accent: '#FF3A00',        // Vibrant red-orange
          background: '#1A1A18',    // Nearly black
          surface: '#2A2A28',       // Dark gray
          text: '#F5F5F0',          // Off-white
          textAlt: '#BFB5A3',       // Muted beige
        },
        typography: {
          headingWeight: 900,
          bodyWeight: 400,
          lineHeight: 1.2,
        },
        animation: {
          heroMotion: 'earthquake',  // Abrupt, sharp movements
          pageTransition: 'slash',   // Aggressive page transitions
          buttonHover: 'growl',      // Intense hover state
        },
        imagery: {
          filter: 'contrast(1.2) saturate(0.9)',
          cornerStyle: 'jagged',
          decorativeElements: ['claw-marks', 'torn-edges'],
        },
      },
      'ethereal': {
        // Ethereal collection with fluid, dreamy aesthetics
        name: 'Ethereal',
        colors: {
          primary: '#A7C5E1',       // Soft blue
          secondary: '#CEC5F2',     // Lavender
          accent: '#F0B9DD',        // Pink
          background: '#F5F9FF',    // Light blue-white
          surface: '#FFFFFF',       // White
          text: '#242B38',          // Deep navy
          textAlt: '#6F7C94',       // Steel blue
        },
        typography: {
          headingWeight: 300,
          bodyWeight: 300,
          lineHeight: 1.5,
        },
        animation: {
          heroMotion: 'float',       // Gentle floating elements
          pageTransition: 'dissolve', // Soft page transitions
          buttonHover: 'glow',        // Gentle hover state
        },
        imagery: {
          filter: 'brightness(1.05) saturate(0.95)',
          cornerStyle: 'rounded',
          decorativeElements: ['mist', 'sparkles'],
        },
      },
      'techno': {
        // Techno collection with futuristic, edgy aesthetics
        name: 'Techno',
        colors: {
          primary: '#00F0FF',       // Cyan
          secondary: '#FF00CA',     // Magenta
          accent: '#FFF500',        // Yellow
          background: '#0A0A14',    // Deep blue-black
          surface: '#1A1A28',       // Dark blue-gray
          text: '#FFFFFF',          // White
          textAlt: '#9595B5',       // Muted blue-gray
        },
        typography: {
          headingWeight: 700,
          bodyWeight: 400,
          lineHeight: 1.3,
        },
        animation: {
          heroMotion: 'glitch',      // Digital distortion
          pageTransition: 'scan',    // Scanner effect
          buttonHover: 'pulse',      // Electronic pulse
        },
        imagery: {
          filter: 'contrast(1.1) brightness(1.1)',
          cornerStyle: 'pixel',
          decorativeElements: ['circuit-lines', 'data-points'],
        },
      },
    };
  
    // Return the base theme merged with collection-specific theme, or default to primal
    return {
      ...baseTheme,
      ...(collectionThemes[collectionId] || collectionThemes['primal']),
    };
  };
  
  module.exports = { createCollectionTheme };