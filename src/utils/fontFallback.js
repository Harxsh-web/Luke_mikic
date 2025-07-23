// Mobile font fallback utility for handling missing symbols
export function initMobileFontFallback() {
  console.log('Initializing mobile font fallback...');
  
  // Check if we're on a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  console.log('Is mobile device:', isMobile);
  
  if (!isMobile) return;

  // List of problematic symbols that might be missing from Recoleta
  const problematicSymbols = ['$', '!', '%', '&', '-', '(', ')', '*', '+', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '#', '"', "'"];
  
  // Function to wrap symbols with fallback font
  function wrapSymbolsWithFallback(element) {
    if (element.nodeType === Node.TEXT_NODE) {
      let text = element.textContent;
      let hasSymbols = false;
      
      // Check if text contains any problematic symbols
      for (let symbol of problematicSymbols) {
        if (text.includes(symbol)) {
          hasSymbols = true;
          break;
        }
      }
      
      if (hasSymbols) {
        console.log('Found symbols in text:', text);
        
        // Create a regex pattern for all problematic symbols
        const symbolPattern = new RegExp(`([${problematicSymbols.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('')}])`, 'g');
        
        // Replace symbols with spans that have fallback font - using multiple font options
        const newHTML = text.replace(symbolPattern, '<span style="font-family: \'Inter\', \'Roboto\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', system-ui, \'Helvetica Neue\', Arial, sans-serif !important;">$1</span>');
        
        if (newHTML !== text) {
          const wrapper = document.createElement('span');
          wrapper.innerHTML = newHTML;
          element.parentNode.replaceChild(wrapper, element);
          console.log('Replaced symbols in:', text);
        }
      }
    } else if (element.nodeType === Node.ELEMENT_NODE) {
      // Recursively process child nodes
      const children = Array.from(element.childNodes);
      children.forEach(child => wrapSymbolsWithFallback(child));
    }
  }
  
  // Function to process all headings
  function processHeadings() {
    console.log('Processing headings...');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('Found headings:', headings.length);
    
    headings.forEach((heading, index) => {
      console.log(`Processing heading ${index + 1}:`, heading.textContent);
      wrapSymbolsWithFallback(heading);
    });
  }
  
  // Run with delay to ensure DOM is ready
  setTimeout(() => {
    processHeadings();
  }, 1000);
  
  // Also run after DOM changes (for dynamic content)
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldProcess = true;
      }
    });
    
    if (shouldProcess) {
      setTimeout(processHeadings, 500);
    }
  });
  
  // Start observing after a delay
  setTimeout(() => {
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      console.log('Started observing DOM changes');
    }
  }, 1000);
}

// Alternative approach: CSS-based symbol replacement
export function addMobileFontCSS() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (!isMobile) return;
  
  const style = document.createElement('style');
  style.textContent = `
    /* Mobile-specific symbol handling with multiple font options */
    @media screen and (max-width: 768px) {
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Recoleta', 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Helvetica Neue', Arial, sans-serif !important;
      }
      
      /* Force fallback fonts for specific characters on mobile */
      h1::before, h2::before, h3::before, h4::before, h5::before, h6::before {
        font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Helvetica Neue', Arial, sans-serif;
      }
    }
  `;
  
  document.head.appendChild(style);
}