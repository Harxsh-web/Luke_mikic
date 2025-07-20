import { useEffect, useState } from 'react';

export function useMobileFontFix() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to process text and wrap symbols
  const processTextWithSymbols = (text) => {
    if (!isMobile || !text) return text;

    const problematicSymbols = ['$', '!', '%', '&', '-'];
    let hasSymbols = false;

    for (let symbol of problematicSymbols) {
      if (text.includes(symbol)) {
        hasSymbols = true;
        break;
      }
    }

    if (!hasSymbols) return text;

    // Split text and wrap symbols
    const parts = [];
    let currentText = text;
    
    problematicSymbols.forEach(symbol => {
      const regex = new RegExp(`(\\${symbol})`, 'g');
      currentText = currentText.replace(regex, `|||SYMBOL_START|||$1|||SYMBOL_END|||`);
    });

    const segments = currentText.split('|||');
    
    return segments.map((segment, index) => {
      if (segment === 'SYMBOL_START') return null;
      if (segment === 'SYMBOL_END') return null;
      
      const prevSegment = segments[index - 1];
      if (prevSegment === 'SYMBOL_START') {
        // This is a symbol, wrap it
        return (
          <span 
            key={index}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Roboto", "Helvetica Neue", Arial, sans-serif'
            }}
          >
            {segment}
          </span>
        );
      }
      
      return segment;
    }).filter(Boolean);
  };

  return { isMobile, processTextWithSymbols };
}