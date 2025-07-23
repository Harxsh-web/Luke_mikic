import React from 'react';

const FontSymbolDemo = () => {
  const testText = "Test symbols: $ % ! & - ( ) * + / : ; < = > ? @ [ ] ^ _ ` { | } ~ # \" '";
  
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Recoleta Font Symbol Test</h2>
      
      {/* Default Recoleta with fallbacks */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Default Recoleta (with CSS fallbacks):</h3>
        <h1 className="text-3xl">{testText}</h1>
      </div>
      
      {/* Recoleta with Inter symbols */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recoleta with Inter symbols:</h3>
        <h1 className="text-3xl recoleta-with-inter-symbols">{testText}</h1>
      </div>
      
      {/* Recoleta with Roboto symbols */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recoleta with Roboto symbols:</h3>
        <h1 className="text-3xl recoleta-with-roboto-symbols">{testText}</h1>
      </div>
      
      {/* Recoleta with System symbols */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recoleta with System symbols:</h3>
        <h1 className="text-3xl recoleta-with-system-symbols">{testText}</h1>
      </div>
      
      {/* Recoleta with Monospace symbols */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recoleta with Monospace symbols:</h3>
        <h1 className="text-3xl recoleta-with-monospace-symbols">{testText}</h1>
      </div>
      
      {/* Mixed content examples */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Mixed content with different symbol fonts:</h3>
        <div className="space-y-2">
          <h1 className="text-2xl mixed-recoleta-content">
            Regular text with <span className="symbol-inter">$ % !</span> Inter symbols
          </h1>
          <h1 className="text-2xl mixed-recoleta-content">
            Regular text with <span className="symbol-roboto">& - ( )</span> Roboto symbols
          </h1>
          <h1 className="text-2xl mixed-recoleta-content">
            Regular text with <span className="symbol-system">* + / :</span> System symbols
          </h1>
          <h1 className="text-2xl mixed-recoleta-content">
            Regular text with <span className="symbol-monospace">; < = ></span> Monospace symbols
          </h1>
        </div>
      </div>
      
      {/* Individual symbol tests */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Individual Symbol Tests:</h3>
        <div className="grid grid-cols-4 gap-4 text-2xl">
          <div className="text-center">
            <div className="font-semibold">$</div>
            <div className="text-sm">Dollar</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">%</div>
            <div className="text-sm">Percent</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">!</div>
            <div className="text-sm">Exclamation</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">&</div>
            <div className="text-sm">Ampersand</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSymbolDemo;