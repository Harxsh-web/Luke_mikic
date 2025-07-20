import React from 'react';

const MobileHeading = ({ children, className = '', as: Component = 'h1', ...props }) => {
  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Function to process text and wrap symbols
  const processContent = (content) => {
    if (!isMobile) return content;

    if (typeof content === 'string') {
      const problematicSymbols = ['$', '!', '%', '&', '-', '–', '—'];
      let hasSymbols = false;

      for (let symbol of problematicSymbols) {
        if (content.includes(symbol)) {
          hasSymbols = true;
          break;
        }
      }

      if (!hasSymbols) return content;

      // Replace symbols with spans
      let processedContent = content;
      problematicSymbols.forEach(symbol => {
        const regex = new RegExp(`(\\${symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
        processedContent = processedContent.replace(regex, 
          `<span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Roboto', 'Helvetica Neue', Arial, sans-serif;">$1</span>`
        );
      });

      return <span dangerouslySetInnerHTML={{ __html: processedContent }} />;
    }

    return content;
  };

  // Process children recursively
  const processChildren = (children) => {
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        return processContent(child);
      }
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: processChildren(child.props.children)
        });
      }
      return child;
    });
  };

  const processedChildren = processChildren(children);

  return (
    <Component className={className} {...props}>
      {processedChildren}
    </Component>
  );
};

export default MobileHeading;