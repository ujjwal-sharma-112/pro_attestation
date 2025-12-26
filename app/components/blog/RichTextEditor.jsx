"use client";

import React, { useState, useRef, useEffect } from 'react';

const RichTextEditor = ({ value, onChange, placeholder = "Enter text...", className = "" }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTarget, setLinkTarget] = useState('_blank');
  const [selectionRange, setSelectionRange] = useState(null);
  const textareaRef = useRef(null);

  // Parse text with links into JSX
  const parseTextWithLinks = (text) => {
    if (!text) return '';
    
    // Regex to match [text](url) or [text](url){target} format
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      const target = match[3] || '_blank';
      
      parts.push(`<a href="${linkUrl}" target="${target}" class="text-[#FF6A00] hover:text-[#E63C00] underline">${linkText}</a>`);
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.join('');
  };

  // Handle text selection
  const handleTextSelection = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    if (start !== end) {
      const text = textarea.value.slice(start, end);
      setSelectedText(text);
      setSelectionRange({ start, end });
    }
  };

  // Add link to selected text
  const addLink = () => {
    if (!selectionRange || !selectedText || !linkUrl) return;

    const { start, end } = selectionRange;
    const currentValue = value || '';
    const targetAttribute = linkTarget !== '_self' ? `{${linkTarget}}` : '';
    const linkMarkdown = `[${selectedText}](${linkUrl})${targetAttribute}`;
    
    const newValue = currentValue.slice(0, start) + linkMarkdown + currentValue.slice(end);
    onChange(newValue);
    
    // Reset states
    setShowLinkModal(false);
    setSelectedText('');
    setLinkUrl('');
    setLinkTarget('_blank');
    setSelectionRange(null);
  };

  // Handle key shortcuts
  const handleKeyDown = (e) => {
    // Ctrl+K or Cmd+K to add link
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      handleTextSelection();
      if (selectedText) {
        setShowLinkModal(true);
      }
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => {
              handleTextSelection();
              if (selectedText) {
                setShowLinkModal(true);
              } else {
                alert('Please select some text first');
              }
            }}
            className="px-3 py-1 bg-[#FF6A00] text-white text-sm rounded hover:bg-[#E63C00] transition-colors"
            title="Add Link (Ctrl+K)"
          >
            🔗 Add Link
          </button>
          <span className="text-xs text-gray-500">
            Select text and click "Add Link" or use Ctrl+K
          </span>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onMouseUp={handleTextSelection}
        onKeyUp={handleTextSelection}
        onKeyDown={handleKeyDown}
        className={`w-full p-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 font-mono text-sm ${className}`}
        placeholder={placeholder}
        rows={6}
      />

      {/* Preview of formatted text */}
      {value && (
        <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-md">
          <div className="text-xs text-gray-600 mb-1">Preview:</div>
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: parseTextWithLinks(value) }}
          />
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add Link</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selected Text
              </label>
              <input
                type="text"
                value={selectedText}
                onChange={(e) => setSelectedText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
                placeholder="Link text"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL
              </label>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
                placeholder="https://example.com"
                autoFocus
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Open Link In
              </label>
              <select
                value={linkTarget}
                onChange={(e) => setLinkTarget(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
              >
                <option value="_blank">New Tab</option>
                <option value="_self">Same Tab</option>
              </select>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={addLink}
                disabled={!linkUrl || !selectedText}
                className="flex-1 bg-[#FF6A00] text-white py-2 px-4 rounded hover:bg-[#E63C00] transition-colors disabled:bg-gray-400"
              >
                Add Link
              </button>
              <button
                onClick={() => {
                  setShowLinkModal(false);
                  setSelectedText('');
                  setLinkUrl('');
                  setLinkTarget('_blank');
                  setSelectionRange(null);
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor; 