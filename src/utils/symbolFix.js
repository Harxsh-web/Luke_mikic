/**
 * Symbol Fix Utility for Mobile Browsers
 * Automatically wraps problematic symbols with system font fallbacks
 */

export function fixSymbolsInElement(element) {
  if (!element) return;
  
  // List of problematic symbols that often don't render in custom fonts
  const problematicSymbols = ['$', "'", '"', '&', '@', '#', '%', '*', '+', '=', '|', '\\', '/', '?', '!'];
  
  // Walk through all text nodes
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  let node;
  
  while (node = walker.nextNode()) {
    textNodes.push(node);
  }
  
  textNodes.forEach(textNode => {
    let text = textNode.textContent;
    let hasProblematicSymbols = false;
    
    // Check if text contains any problematic symbols
    for (const symbol of problematicSymbols) {
      if (text.includes(symbol)) {
        hasProblematicSymbols = true;
        break;
      }
    }
    
    if (hasProblematicSymbols) {
      // Create a document fragment to hold the new nodes
      const fragment = document.createDocumentFragment();
      
      // Split text and wrap symbols
      let lastIndex = 0;
      for (let i = 0; i < text.length; i++) {
        if (problematicSymbols.includes(text[i])) {
          // Add text before symbol
          if (i > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, i)));
          }
          
          // Create span for symbol with system font
          const symbolSpan = document.createElement('span');
          symbolSpan.className = 'symbol-safe';
          symbolSpan.textContent = text[i];
          fragment.appendChild(symbolSpan);
          
          lastIndex = i + 1;
        }
      }
      
      // Add remaining text
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
      
      // Replace the original text node
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  });
}

// Auto-fix symbols on page load
export function autoFixSymbols() {
  // Fix symbols in the entire document
  fixSymbolsInElement(document.body);
  
  // Set up a mutation observer to fix symbols in dynamically added content
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          fixSymbolsInElement(node);
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Manual fix function for specific text
export function wrapSymbolsInText(text) {
  const problematicSymbols = ['$', "'", '"', '&', '@', '#', '%', '*', '+', '=', '|', '\\', '/', '?', '!'];
  
  let result = text;
  problematicSymbols.forEach(symbol => {
    const regex = new RegExp(`\\${symbol}`, 'g');
    result = result.replace(regex, `<span class="symbol-safe">${symbol}</span>`);
  });
  
  return result;
}

// Initialize on DOM content loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoFixSymbols);
  } else {
    autoFixSymbols();
  }
}