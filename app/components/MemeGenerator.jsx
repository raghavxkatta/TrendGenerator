'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Image, 
  Download, 
  Share2, 
  Sparkles, 
  Palette, 
  Type, 
  RotateCcw,
  Upload,
  Wand2,
  Save
} from 'lucide-react';

export default function MemeGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(32);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMeme, setGeneratedMeme] = useState(null);
  const canvasRef = useRef(null);

  const memeTemplates = [
    { id: 1, name: 'Classic Doge', url: 'https://via.placeholder.com/400x300/FFD700/000000?text=Doge', category: 'classic' },
    { id: 2, name: 'Success Kid', url: 'https://via.placeholder.com/400x300/87CEEB/000000?text=Success', category: 'classic' },
    { id: 3, name: 'One Does Not Simply', url: 'https://via.placeholder.com/400x300/FF6B6B/000000?text=One+Does+Not+Simply', category: 'classic' },
    { id: 4, name: 'Y U No', url: 'https://via.placeholder.com/400x300/4ECDC4/000000?text=Y+U+NO', category: 'classic' },
    { id: 5, name: 'Ancient Aliens', url: 'https://via.placeholder.com/400x300/45B7D1/000000?text=Aliens', category: 'classic' },
    { id: 6, name: 'Grumpy Cat', url: 'https://via.placeholder.com/400x300/96CEB4/000000?text=Grumpy', category: 'classic' },
  ];

  const aiCaptionSuggestions = [
    "When you finally finish that project at 3 AM",
    "That moment when you realize you forgot something important",
    "Me trying to adult but failing miserably",
    "When someone asks if you're okay and you're definitely not",
    "That awkward silence in group conversations",
    "When you think you're being productive but you're actually procrastinating"
  ];

  const generateAICaption = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomCaption = aiCaptionSuggestions[Math.floor(Math.random() * aiCaptionSuggestions.length)];
      setTopText(randomCaption);
      setIsGenerating(false);
    }, 1500);
  };

  const generateMeme = () => {
    if (!selectedTemplate) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 400;
    canvas.height = 300;
    
    // Create a temporary image to draw
    const img = new Image();
    img.onload = () => {
      // Draw template
      ctx.drawImage(img, 0, 0, 400, 300);
      
      // Configure text
      ctx.fillStyle = textColor;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.font = `bold ${fontSize}px Impact`;
      ctx.textAlign = 'center';
      
      // Draw top text
      if (topText) {
        ctx.strokeText(topText, 200, 50);
        ctx.fillText(topText, 200, 50);
      }
      
      // Draw bottom text
      if (bottomText) {
        ctx.strokeText(bottomText, 200, 250);
        ctx.fillText(bottomText, 200, 250);
      }
      
      // Convert to data URL
      const dataURL = canvas.toDataURL('image/png');
      setGeneratedMeme(dataURL);
    };
    
    img.src = selectedTemplate.url;
  };

  const downloadMeme = () => {
    if (!generatedMeme) return;
    
    const link = document.createElement('a');
    link.download = 'generated-meme.png';
    link.href = generatedMeme;
    link.click();
  };

  const resetMeme = () => {
    setTopText('');
    setBottomText('');
    setTextColor('#ffffff');
    setFontSize(32);
    setGeneratedMeme(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">AI-Powered Meme Generator</h2>
        <p className="text-gray-600">Create viral memes with trending templates and smart caption suggestions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Controls */}
        <div className="space-y-6">
          {/* Template Selection */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <Image className="w-5 h-5" />
              Choose Template
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {memeTemplates.map((template) => (
                <motion.button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedTemplate?.id === template.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={template.url} 
                    alt={template.name}
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">{template.name}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Text Inputs */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <Type className="w-5 h-5" />
              Meme Text
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Top Text</label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="Enter top text..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bottom Text</label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="Enter bottom text..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* AI Caption Generator */}
              <motion.button
                onClick={generateAICaption}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    Generate AI Caption
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Customization
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">{textColor}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min="16"
                  max="64"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              onClick={generateMeme}
              disabled={!selectedTemplate}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Generate Meme
            </motion.button>
            
            <motion.button
              onClick={resetMeme}
              className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RotateCcw className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Right Panel - Preview & Output */}
        <div className="space-y-6">
          {/* Meme Preview */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Meme Preview</h3>
            
            {selectedTemplate ? (
              <div className="relative">
                <img 
                  src={selectedTemplate.url} 
                  alt={selectedTemplate.name}
                  className="w-full rounded-lg"
                />
                {topText && (
                  <div 
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center"
                    style={{ color: textColor, fontSize: `${fontSize}px`, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {topText}
                  </div>
                )}
                {bottomText && (
                  <div 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
                    style={{ color: textColor, fontSize: `${fontSize}px`, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {bottomText}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <div className="text-center text-gray-500">
                  <Image className="w-16 h-16 mx-auto mb-2 opacity-50" />
                  <p>Select a template to preview</p>
                </div>
              </div>
            )}
          </div>

          {/* Generated Meme */}
          {generatedMeme && (
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Your Generated Meme</h3>
              
              <img 
                src={generatedMeme} 
                alt="Generated Meme"
                className="w-full rounded-lg mb-4"
              />
              
              <div className="flex gap-3">
                <motion.button
                  onClick={downloadMeme}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.button>
                
                <motion.button
                  className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-medium hover:border-gray-400 hover:text-gray-700 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hidden canvas for meme generation */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
