"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlockRenderer from './BlockRenderer';
import RichTextEditor from './RichTextEditor';

// Generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

const BlogEditor = ({ initialBlog = null }) => {
  const router = useRouter();
  const [blog, setBlog] = useState({
    title: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    keywords: [],
    content: []
  });
  const [keywordInput, setKeywordInput] = useState('');
  const [currentBlockType, setCurrentBlockType] = useState('paragraph');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [templateEditIndex, setTemplateEditIndex] = useState(null);
  const [editingBlockIndex, setEditingBlockIndex] = useState(null);
  const [editingBlockData, setEditingBlockData] = useState(null);
  
  // Block form states
  const [headingForm, setHeadingForm] = useState({ level: 2, text: '' });
  const [paragraphForm, setParagraphForm] = useState({ text: '' });
  const [listForm, setListForm] = useState({ style: 'bullet', items: [''] });
  const [tableForm, setTableForm] = useState({ 
    headers: ['', ''], 
    rows: [['', '']] 
  });
  const [faqForm, setFaqForm] = useState({ question: '', answer: '' });
  const [imageForm, setImageForm] = useState({ src: '', alt: '', caption: '' });
  const [quoteForm, setQuoteForm] = useState({ text: '', author: '' });
  
  // Templates for common content structures
  const contentTemplates = {
    servicesList: {
      type: 'template',
      name: 'Services List',
      blocks: [
        {
          type: 'heading',
          level: 2,
          text: 'Our Services Include:'
        },
        {
          type: 'list',
          style: 'bullet',
          items: [
            'MEA Attestation',
            'Embassy Attestation in Delhi',
            'Apostille Services in Delhi',
            'Home/HRD Department Attestation'
          ]
        }
      ]
    },
    benefitsList: {
      type: 'template',
      name: 'Benefits List',
      blocks: [
        {
          type: 'heading',
          level: 2,
          text: 'Why clients prefer Pro Attestation Services:'
        },
        {
          type: 'list',
          style: 'bullet',
          items: [
            '100% accuracy and transparency',
            'Timely delivery within committed timelines',
            'Affordable pricing and urgent processing available'
          ]
        }
      ]
    },
    faqSection: {
      type: 'template',
      name: 'FAQ Section',
      blocks: [
        {
          type: 'heading',
          level: 2,
          text: 'Frequently Asked Questions (FAQs)'
        },
        {
          type: 'faq',
          question: 'How long does apostille take in India?',
          answer: 'Generally 2–3 working days.'
        },
        {
          type: 'faq',
          question: 'Is apostille enough for UAE?',
          answer: 'No. UAE is not a Hague Convention country. You need full attestation including UAE Embassy and MOFA.'
        },
        {
          type: 'faq',
          question: 'Do apostille documents expire?',
          answer: 'Yes. Most countries accept apostille within 6–12 months, but check with your specific institution.'
        }
      ]
    },
    comparisonTable: {
      type: 'template',
      name: 'Comparison Table',
      blocks: [
        {
          type: 'heading',
          level: 2,
          text: 'Apostille vs Attestation: Key Differences'
        },
        {
          type: 'table',
          headers: ['Feature', 'Apostille', 'Attestation'],
          rows: [
            ['Applicable Countries', 'Hague Convention members', 'Non-Hague countries (UAE, Qatar, Saudi Arabia)'],
            ['Authorized by', 'MEA (India)', 'Notary → State → MEA → Embassy → MOFA'],
            ['Final Step', 'Apostille sticker from MEA', 'Embassy + MOFA attestation'],
            ['Validity', 'Generally valid for 6 months to 1 year', 'Depends on the country\'s rules'],
            ['Time Required', '2–3 working days (typical)', '4–10 working days (depending on document type)']
          ]
        }
      ]
    },
    dividerBlock: {
      type: 'template',
      name: 'Divider with Spacing',
      blocks: [
        {
          type: 'paragraph',
          text: ' '
        },
        {
          type: 'divider'
        },
        {
          type: 'paragraph',
          text: ' '
        }
      ]
    }
  };
  
  // Load initial blog data if provided
  useEffect(() => {
    if (initialBlog) {
      setBlog(initialBlog);
    }
  }, [initialBlog]);
  
  // Handle basic blog info change
  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'title') {
      // Auto-generate slug
      const newSlug = generateSlug(value);
      setBlog({
        ...blog,
        title: value,
        slug: newSlug,
        metaTitle: blog.metaTitle || value // Set meta title to title if not set
      });
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };
  
  // Handle keywords
  const handleKeywordKeyDown = (e) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault();
      // Add keyword if it doesn't already exist
      if (!blog.keywords.includes(keywordInput.trim())) {
        setBlog({
          ...blog,
          keywords: [...blog.keywords, keywordInput.trim()]
        });
      }
      setKeywordInput('');
    }
  };
  
  const removeKeyword = (keyword) => {
    setBlog({
      ...blog,
      keywords: blog.keywords.filter(k => k !== keyword)
    });
  };
  
  // Handle block addition
  const addBlock = () => {
    let newBlock;
    
    switch(currentBlockType) {
      case 'heading':
        newBlock = { 
          type: 'heading', 
          level: parseInt(headingForm.level), 
          text: headingForm.text 
        };
        setHeadingForm({ level: 2, text: '' });
        break;
      case 'paragraph':
        newBlock = { 
          type: 'paragraph', 
          text: paragraphForm.text 
        };
        setParagraphForm({ text: '' });
        break;
      case 'list':
        newBlock = { 
          type: 'list', 
          style: listForm.style, 
          items: listForm.items.filter(item => item.trim()) 
        };
        setListForm({ style: 'bullet', items: [''] });
        break;
      case 'table':
        newBlock = { 
          type: 'table', 
          headers: tableForm.headers, 
          rows: tableForm.rows 
        };
        setTableForm({ headers: ['', ''], rows: [['', '']] });
        break;
      case 'faq':
        newBlock = { 
          type: 'faq', 
          question: faqForm.question, 
          answer: faqForm.answer 
        };
        setFaqForm({ question: '', answer: '' });
        break;
      case 'image':
        newBlock = { 
          type: 'image', 
          src: imageForm.src, 
          alt: imageForm.alt, 
          caption: imageForm.caption 
        };
        setImageForm({ src: '', alt: '', caption: '' });
        break;
      case 'quote':
        newBlock = { 
          type: 'quote', 
          text: quoteForm.text, 
          author: quoteForm.author 
        };
        setQuoteForm({ text: '', author: '' });
        break;
      case 'divider':
        newBlock = { type: 'divider' };
        break;
      default:
        return;
    }
    
    setBlog({
      ...blog,
      content: [...blog.content, newBlock]
    });
  };
  
  // Remove a block
  const removeBlock = (index) => {
    const newContent = [...blog.content];
    newContent.splice(index, 1);
    setBlog({ ...blog, content: newContent });
  };

  // Edit an existing block
  const editBlock = (index, updatedBlock) => {
    const newContent = [...blog.content];
    newContent[index] = updatedBlock;
    setBlog({ ...blog, content: newContent });
  };

  // Start editing a block
  const startBlockEdit = (index) => {
    setEditingBlockIndex(index);
    setEditingBlockData({ ...blog.content[index] });
  };

  // Save block edit
  const saveBlockEdit = () => {
    if (editingBlockIndex !== null && editingBlockData) {
      editBlock(editingBlockIndex, editingBlockData);
      setEditingBlockIndex(null);
      setEditingBlockData(null);
      
      // Show a brief success message
      setMessage('Block updated successfully! Remember to save the blog.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Cancel block edit
  const cancelBlockEdit = () => {
    setEditingBlockIndex(null);
    setEditingBlockData(null);
  };

  // Render inline block editor
  const renderInlineBlockEditor = (block, index) => {
    const updateEditingBlock = (updatedData) => {
      setEditingBlockData({ ...editingBlockData, ...updatedData });
    };

    switch(block.type) {
      case 'heading':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Heading Level</label>
              <select
                value={editingBlockData.level}
                onChange={(e) => updateEditingBlock({ level: parseInt(e.target.value) })}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
              >
                <option value="1">H1</option>
                <option value="2">H2</option>
                <option value="3">H3</option>
                <option value="4">H4</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Heading Text</label>
              <RichTextEditor
                value={editingBlockData.text}
                onChange={(value) => updateEditingBlock({ text: value })}
                placeholder="Heading text"
                className="min-h-[80px]"
              />
            </div>
          </div>
        );

      case 'paragraph':
        return (
          <div>
            <label className="block mb-1 font-medium text-gray-700">Paragraph Text</label>
            <RichTextEditor
              value={editingBlockData.text}
              onChange={(value) => updateEditingBlock({ text: value })}
              placeholder="Enter paragraph text..."
              className="min-h-[120px]"
            />
          </div>
        );

      case 'list':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">List Type</label>
              <select
                value={editingBlockData.style}
                onChange={(e) => updateEditingBlock({ style: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
              >
                <option value="bullet">Bullet List</option>
                <option value="ordered">Numbered List</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">List Items</label>
              {editingBlockData.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3">
                  <div className="flex items-start space-x-2">
                    <div className="flex-1">
                      <RichTextEditor
                        value={item}
                        onChange={(value) => {
                          const newItems = [...editingBlockData.items];
                          newItems[itemIndex] = value;
                          updateEditingBlock({ items: newItems });
                        }}
                        placeholder={`Item ${itemIndex + 1}`}
                        className="min-h-[80px]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newItems = [...editingBlockData.items];
                        newItems.splice(itemIndex, 1);
                        updateEditingBlock({ items: newItems });
                      }}
                      className="mt-2 p-2 text-red-500 hover:bg-red-100 rounded"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newItems = [...editingBlockData.items, ''];
                  updateEditingBlock({ items: newItems });
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
              >
                + Add Item
              </button>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Question</label>
              <RichTextEditor
                value={editingBlockData.question}
                onChange={(value) => updateEditingBlock({ question: value })}
                placeholder="Enter the question"
                className="min-h-[80px]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Answer</label>
              <RichTextEditor
                value={editingBlockData.answer}
                onChange={(value) => updateEditingBlock({ answer: value })}
                placeholder="Enter the answer"
                className="min-h-[120px]"
              />
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Quote Text</label>
              <RichTextEditor
                value={editingBlockData.text}
                onChange={(value) => updateEditingBlock({ text: value })}
                placeholder="Enter the quote text"
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Author (optional)</label>
              <RichTextEditor
                value={editingBlockData.author}
                onChange={(value) => updateEditingBlock({ author: value })}
                placeholder="Quote author"
                className="min-h-[60px]"
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                value={editingBlockData.src}
                onChange={(e) => updateEditingBlock({ src: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Alt Text</label>
              <input
                type="text"
                value={editingBlockData.alt}
                onChange={(e) => updateEditingBlock({ alt: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
                placeholder="Image description"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Caption (optional)</label>
              <input
                type="text"
                value={editingBlockData.caption}
                onChange={(e) => updateEditingBlock({ caption: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-gray-800"
                placeholder="Image caption"
              />
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Table Headers</label>
              <div className="flex mb-4">
                {editingBlockData.headers.map((header, headerIndex) => (
                  <div key={headerIndex} className="flex-1 px-1">
                    <input
                      type="text"
                      value={header}
                      onChange={(e) => {
                        const newHeaders = [...editingBlockData.headers];
                        newHeaders[headerIndex] = e.target.value;
                        updateEditingBlock({ headers: newHeaders });
                      }}
                      className="w-full p-2 border border-gray-300 rounded text-gray-800"
                      placeholder={`Header ${headerIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Table Rows</label>
              {editingBlockData.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex mb-2">
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex} className="flex-1 px-1">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => {
                          const newRows = [...editingBlockData.rows];
                          newRows[rowIndex][cellIndex] = e.target.value;
                          updateEditingBlock({ rows: newRows });
                        }}
                        className="w-full p-2 border border-gray-300 rounded text-gray-800"
                        placeholder={`Cell ${rowIndex + 1},${cellIndex + 1}`}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newRows = [...editingBlockData.rows];
                      newRows.splice(rowIndex, 1);
                      updateEditingBlock({ rows: newRows });
                    }}
                    className="ml-2 px-3 text-red-500"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newRow = Array(editingBlockData.headers.length).fill('');
                  updateEditingBlock({ rows: [...editingBlockData.rows, newRow] });
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
              >
                + Add Row
              </button>
            </div>
          </div>
        );

      default:
        return <div>Unsupported block type for editing</div>;
    }
  };
  
  // Move block up/down
  const moveBlock = (index, direction) => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === blog.content.length - 1)) {
      return;
    }
    
    const newContent = [...blog.content];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newContent[index], newContent[targetIndex]] = [newContent[targetIndex], newContent[index]];
    
    setBlog({ ...blog, content: newContent });
  };
  
  // Handle list form change
  const handleListItemChange = (index, value) => {
    const newItems = [...listForm.items];
    newItems[index] = value;
    
    // Add a new empty field if this is the last one and it's not empty
    if (index === newItems.length - 1 && value.trim()) {
      newItems.push('');
    }
    
    setListForm({ ...listForm, items: newItems });
  };
  
  // Handle table form change
  const handleTableHeaderChange = (index, value) => {
    const newHeaders = [...tableForm.headers];
    newHeaders[index] = value;
    
    // Add a new column if this is the last header and it's not empty
    if (index === newHeaders.length - 1 && value.trim()) {
      newHeaders.push('');
      // Add an empty cell to each row
      const newRows = tableForm.rows.map(row => [...row, '']);
      setTableForm({ headers: newHeaders, rows: newRows });
    } else {
      setTableForm({ ...tableForm, headers: newHeaders });
    }
  };
  
  const handleTableCellChange = (rowIndex, cellIndex, value) => {
    const newRows = [...tableForm.rows];
    newRows[rowIndex][cellIndex] = value;
    
    // Add a new row if this is the last row, last cell, and it's not empty
    if (rowIndex === newRows.length - 1 && 
        cellIndex === newRows[rowIndex].length - 1 && 
        value.trim()) {
      newRows.push(Array(tableForm.headers.length).fill(''));
    }
    
    setTableForm({ ...tableForm, rows: newRows });
  };
  
  // Add template blocks to content
  const addTemplate = (templateKey) => {
    const template = contentTemplates[templateKey];
    if (!template) return;
    
    // Add template identifier to the first block
    const templateBlocks = [...template.blocks];
    if (templateBlocks.length > 0) {
      templateBlocks[0] = {
        ...templateBlocks[0],
        isTemplateStart: true,
        templateKey: templateKey,
        templateName: template.name
      };
    }
    
    // Add all blocks from the template
    setBlog({
      ...blog,
      content: [...blog.content, ...templateBlocks]
    });
    
    setShowTemplates(false);
  };
  
  // Find template blocks in content - returns range [startIndex, endIndex]
  const findTemplateBlocks = (startIndex) => {
    if (!blog.content[startIndex]?.isTemplateStart) {
      return [startIndex, startIndex];
    }
    
    // Find next template start or end of content
    let endIndex = startIndex;
    for (let i = startIndex + 1; i < blog.content.length; i++) {
      if (blog.content[i].isTemplateStart) {
        break;
      }
      endIndex = i;
    }
    
    return [startIndex, endIndex];
  };
  
  // Extract template blocks for editing
  const startTemplateEdit = (index) => {
    const [startIndex, endIndex] = findTemplateBlocks(index);
    const templateKey = blog.content[startIndex].templateKey;
    
    if (!templateKey) return;
    
    const templateBlocks = blog.content.slice(startIndex, endIndex + 1).map(block => {
      // Create a copy without template markers
      const { isTemplateStart, templateKey, templateName, ...cleanBlock } = block;
      return cleanBlock;
    });
    
    setEditingTemplate({
      blocks: templateBlocks,
      templateKey,
      startIndex,
      endIndex
    });
    
    setTemplateEditIndex(index);
  };
  
  // Save edited template back to content
  const saveTemplateEdit = () => {
    if (!editingTemplate) return;
    
    const { blocks, startIndex, endIndex, templateKey } = editingTemplate;
    
    // Add template identifier to the first block
    const templateBlocks = [...blocks];
    if (templateBlocks.length > 0) {
      templateBlocks[0] = {
        ...templateBlocks[0],
        isTemplateStart: true,
        templateKey,
        templateName: contentTemplates[templateKey]?.name || 'Custom Template'
      };
    }
    
    // Replace blocks in content
    const newContent = [
      ...blog.content.slice(0, startIndex),
      ...templateBlocks,
      ...blog.content.slice(endIndex + 1)
    ];
    
    setBlog({
      ...blog,
      content: newContent
    });
    
    // Reset editing state
    setEditingTemplate(null);
    setTemplateEditIndex(null);
  };
  
  // Cancel template editing
  const cancelTemplateEdit = () => {
    setEditingTemplate(null);
    setTemplateEditIndex(null);
  };
  
  // Template Editor Component
  const TemplateEditor = () => {
    if (!editingTemplate) return null;
    
    const templateKey = editingTemplate.templateKey;
    const templateName = contentTemplates[templateKey]?.name || 'Custom Template';
    
    // Create local state for editing
    const [editBlocks, setEditBlocks] = useState(editingTemplate.blocks);
    
    // Update a specific block
    const updateBlock = (index, updatedBlock) => {
      const newBlocks = [...editBlocks];
      newBlocks[index] = updatedBlock;
      setEditBlocks(newBlocks);
    };
    
    // Render appropriate editor for each block type
    const renderBlockEditor = (block, index) => {
      switch(block.type) {
        case 'heading':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2">
                <label className="block mb-1 font-medium text-gray-700">Heading Level</label>
                <select
                  value={block.level}
                  onChange={(e) => updateBlock(index, { ...block, level: parseInt(e.target.value) })}
                  className="w-full p-2 border border-gray-300 rounded text-gray-800"
                >
                  <option value="1">H1</option>
                  <option value="2">H2</option>
                  <option value="3">H3</option>
                  <option value="4">H4</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Heading Text</label>
                <input
                  type="text"
                  value={block.text}
                  onChange={(e) => updateBlock(index, { ...block, text: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-gray-800 placeholder-gray-500"
                  placeholder="Heading text"
                />
              </div>
            </div>
          );
          
        case 'paragraph':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <label className="block mb-1 font-medium text-gray-700">Paragraph Text</label>
              <RichTextEditor
                value={block.text}
                onChange={(value) => updateBlock(index, { ...block, text: value })}
                placeholder="Enter paragraph text..."
                className="min-h-[100px]"
              />
            </div>
          );
          
        case 'list':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2">
                <label className="block mb-1 font-medium text-gray-700">List Type</label>
                <select
                  value={block.style}
                  onChange={(e) => updateBlock(index, { ...block, style: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-gray-800"
                >
                  <option value="bullet">Bullet List</option>
                  <option value="ordered">Numbered List</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">List Items</label>
                {block.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-3">
                    <div className="flex items-start space-x-2">
                      <div className="flex-1">
                        <RichTextEditor
                          value={item}
                          onChange={(value) => {
                            const newItems = [...block.items];
                            newItems[itemIndex] = value;
                            updateBlock(index, { ...block, items: newItems });
                          }}
                          placeholder={`Item ${itemIndex + 1}`}
                          className="min-h-[80px]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newItems = [...block.items];
                          newItems.splice(itemIndex, 1);
                          updateBlock(index, { ...block, items: newItems });
                        }}
                        className="mt-2 px-3 text-red-500"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    updateBlock(index, { 
                      ...block, 
                      items: [...block.items, ''] 
                    });
                  }}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                >
                  + Add Item
                </button>
              </div>
            </div>
          );
          
        case 'table':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <label className="block mb-1 font-medium text-gray-700">Table Headers</label>
              <div className="flex mb-4">
                {block.headers.map((header, headerIndex) => (
                  <div key={headerIndex} className="flex-1 px-1">
                    <input
                      type="text"
                      value={header}
                      onChange={(e) => {
                        const newHeaders = [...block.headers];
                        newHeaders[headerIndex] = e.target.value;
                        updateBlock(index, { ...block, headers: newHeaders });
                      }}
                      className="w-full p-2 border border-gray-300 rounded text-gray-800 placeholder-gray-500"
                      placeholder={`Header ${headerIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
              
              <label className="block mb-1 font-medium text-gray-700">Table Rows</label>
              {block.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex mb-2">
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex} className="flex-1 px-1">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => {
                          const newRows = [...block.rows];
                          newRows[rowIndex][cellIndex] = e.target.value;
                          updateBlock(index, { ...block, rows: newRows });
                        }}
                        className="w-full p-2 border border-gray-300 rounded text-gray-800 placeholder-gray-500"
                        placeholder={`Cell ${rowIndex + 1},${cellIndex + 1}`}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newRows = [...block.rows];
                      newRows.splice(rowIndex, 1);
                      updateBlock(index, { ...block, rows: newRows });
                    }}
                    className="ml-2 px-3 text-red-500"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newRow = Array(block.headers.length).fill('');
                  updateBlock(index, { 
                    ...block, 
                    rows: [...block.rows, newRow] 
                  });
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
              >
                + Add Row
              </button>
            </div>
          );
          
        case 'faq':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-2">
                <label className="block mb-1 font-medium text-gray-700">Question</label>
                <RichTextEditor
                  value={block.question}
                  onChange={(value) => updateBlock(index, { ...block, question: value })}
                  placeholder="Enter the question"
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Answer</label>
                <RichTextEditor
                  value={block.answer}
                  onChange={(value) => updateBlock(index, { ...block, answer: value })}
                  placeholder="Enter the answer"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          );
          
        case 'divider':
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-500">Divider</p>
              <hr className="my-2 border-gray-300" />
            </div>
          );
          
        default:
          return (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">Cannot edit this block type: {block.type}</p>
            </div>
          );
      }
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-2 border-b">
            <h3 className="text-xl font-bold text-gray-800">
              Edit {templateName}
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => {
                  // Save edited blocks back
                  setEditingTemplate({
                    ...editingTemplate,
                    blocks: editBlocks
                  });
                  saveTemplateEdit();
                }}
                className="px-4 py-2 bg-[#FF6A00] text-white rounded hover:bg-[#E63C00] transition-colors"
              >
                Save Changes
              </button>
              <button 
                onClick={cancelTemplateEdit}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {editBlocks.map((block, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-medium text-gray-700 capitalize">
                    {block.type} Block
                  </h4>
                </div>
                {renderBlockEditor(block, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Template Selector Component
  const TemplateSelector = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Content Templates</h3>
            <button 
              onClick={() => setShowTemplates(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          
          <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-4">
            {Object.keys(contentTemplates).map((key) => (
              <div 
                key={key}
                onClick={() => addTemplate(key)}
                className="border border-gray-200 text-black rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <h4 className="font-medium text-gray-800 mb-2">{contentTemplates[key].name}</h4>
                <p className="text-sm text-gray-600">
                  {contentTemplates[key].blocks.length} block{contentTemplates[key].blocks.length !== 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Save blog post
  const saveBlog = async () => {
    // Create a working copy of the blog data
    let blogDataToSave = { ...blog };

    // Auto-save any pending block edits before saving the blog
    if (editingBlockIndex !== null && editingBlockData) {
      const newContent = [...blogDataToSave.content];
      newContent[editingBlockIndex] = editingBlockData;
      blogDataToSave = { ...blogDataToSave, content: newContent };
      
      // Update the main state as well
      setBlog(blogDataToSave);
      setEditingBlockIndex(null);
      setEditingBlockData(null);
      
      // Notify user about auto-save
      setMessage('Auto-saving pending edits...');
    }

    // Basic validation
    if (!blogDataToSave.title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!blogDataToSave.content.length) {
      setError('Blog content cannot be empty');
      return;
    }
    
    setLoading(true);
    setError('');
    setMessage('');

    // Small delay to ensure state updates are applied
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      
      // Determine if this is an update or creation
      const method = initialBlog ? 'PUT' : 'POST';
      const url = initialBlog 
        ? `/api/blogs/${blogDataToSave.slug}` 
        : '/api/blogs';

      // Debug logs to verify content is correct
      console.log('=== SAVING BLOG DATA ===');
      console.log('Title:', blogDataToSave.title);
      console.log('Content blocks:', blogDataToSave.content.length);
      console.log('Full content with links:');
      blogDataToSave.content.forEach((block, index) => {
        console.log(`Block ${index} (${block.type}):`, block);
      });
      console.log('=========================');
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogDataToSave)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save blog');
      }
      
      setMessage('Blog saved successfully with all content and links!');
      
      // Redirect to the blog page after a delay
      setTimeout(() => {
        router.push(`/blog/${blogDataToSave.slug}`);
      }, 1500);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {showTemplates && <TemplateSelector />}
      {editingTemplate && <TemplateEditor />}
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {initialBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
          >
            {previewMode ? 'Edit Mode' : 'Preview Mode'}
          </button>
          <button
            type="button"
            onClick={saveBlog}
            disabled={loading}
            className={`px-4 py-2 text-white rounded transition-colors disabled:bg-gray-400 ${
              editingBlockIndex !== null 
                ? 'bg-yellow-600 hover:bg-yellow-700' 
                : 'bg-[#FF6A00] hover:bg-[#E63C00]'
            }`}
            title={editingBlockIndex !== null ? 'Will auto-save current edits' : 'Save blog'}
          >
            {loading 
              ? 'Saving...' 
              : editingBlockIndex !== null 
                ? 'Save Blog (+ Current Edits)' 
                : 'Save Blog'
            }
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {message && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      {!previewMode ? (
        <div className="space-y-6">
          {/* Basic blog information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block mb-2 font-medium text-gray-800">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleBasicInfoChange}
                className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                placeholder="Blog Title"
                required
              />
            </div>
            <div>
              <label htmlFor="slug" className="block mb-2 font-medium text-gray-800">
                Slug (URL)
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={blog.slug}
                onChange={handleBasicInfoChange}
                className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                placeholder="blog-title"
              />
              <p className="mt-1 text-sm text-gray-500">
                Auto-generated from title. Edit if needed.
              </p>
            </div>
          </div>
          
          <div>
            <label htmlFor="metaTitle" className="block mb-2 font-medium text-gray-800">
              Meta Title
            </label>
            <input
              type="text"
              id="metaTitle"
              name="metaTitle"
              value={blog.metaTitle}
              onChange={handleBasicInfoChange}
              className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Meta Title (for SEO)"
            />
          </div>
          
          <div>
            <label htmlFor="metaDescription" className="block mb-2 font-medium text-gray-800">
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              value={blog.metaDescription}
              onChange={handleBasicInfoChange}
              className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Brief description for search engines"
              rows="3"
            ></textarea>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Keywords
            </label>
            <div className="mb-2 flex flex-wrap gap-2">
              {blog.keywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center"
                >
                  {keyword}
                  <button 
                    type="button" 
                    onClick={() => removeKeyword(keyword)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={handleKeywordKeyDown}
              className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
              placeholder="Type keyword and press Enter"
            />
          </div>
          
          {/* Content Blocks */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Blog Content</h2>
              <button
                type="button"
                onClick={() => setShowTemplates(true)}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors"
              >
                Insert Template
              </button>
            </div>
            
            {/* Content Block Builder */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-800">
                  Block Type
                </label>
                <select
                  value={currentBlockType}
                  onChange={(e) => setCurrentBlockType(e.target.value)}
                  className="w-full p-3 border text-gray-800 border-gray-300 rounded-md"
                >
                  <option value="heading">Heading</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                  <option value="table">Table</option>
                  <option value="faq">FAQ</option>
                  <option value="image">Image</option>
                  <option value="quote">Quote</option>
                  <option value="divider">Divider</option>
                </select>
              </div>
              
              {/* Block specific form fields */}
              <div className="mb-4">
                {currentBlockType === 'heading' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Heading Level
                      </label>
                      <select
                        value={headingForm.level}
                        onChange={(e) => setHeadingForm({ ...headingForm, level: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md"
                      >
                        <option value="1">H1</option>
                        <option value="2">H2</option>
                        <option value="3">H3</option>
                        <option value="4">H4</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Heading Text
                      </label>
                      <input
                        type="text"
                        value={headingForm.text}
                        onChange={(e) => setHeadingForm({ ...headingForm, text: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                        placeholder="Heading text"
                      />
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'paragraph' && (
                  <div>
                    <label className="block mb-2 font-medium text-gray-800">
                      Paragraph Text
                    </label>
                    <RichTextEditor
                      value={paragraphForm.text}
                      onChange={(value) => setParagraphForm({ text: value })}
                      placeholder="Enter paragraph text..."
                      className="min-h-[120px]"
                    />
                  </div>
                )}
                
                {currentBlockType === 'list' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        List Type
                      </label>
                      <select
                        value={listForm.style}
                        onChange={(e) => setListForm({ ...listForm, style: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md"
                      >
                        <option value="bullet">Bullet List</option>
                        <option value="ordered">Numbered List</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        List Items
                      </label>
                      {listForm.items.map((item, index) => (
                        <div key={index} className="mb-3">
                          <div className="flex items-start space-x-2">
                            <div className="flex-1">
                              <RichTextEditor
                                value={item}
                                onChange={(value) => handleListItemChange(index, value)}
                                placeholder={`Item ${index + 1}`}
                                className="min-h-[80px]"
                              />
                            </div>
                            {index !== listForm.items.length - 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const newItems = [...listForm.items];
                                  newItems.splice(index, 1);
                                  setListForm({ ...listForm, items: newItems });
                                }}
                                className="mt-2 p-2 text-red-500 hover:bg-red-100 rounded"
                              >
                                &times;
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'table' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Table Headers
                      </label>
                      <div className="flex space-x-2 mb-4">
                        {tableForm.headers.map((header, index) => (
                          <input
                            key={index}
                            type="text"
                            value={header}
                            onChange={(e) => handleTableHeaderChange(index, e.target.value)}
                            className="flex-1 p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                            placeholder={`Header ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Table Rows
                      </label>
                      {tableForm.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex space-x-2 mb-2">
                          {row.map((cell, cellIndex) => (
                            <input
                              key={cellIndex}
                              type="text"
                              value={cell}
                              onChange={(e) => handleTableCellChange(rowIndex, cellIndex, e.target.value)}
                              className="flex-1 p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                              placeholder={`Cell ${rowIndex + 1},${cellIndex + 1}`}
                            />
                          ))}
                          {rowIndex !== tableForm.rows.length - 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                const newRows = [...tableForm.rows];
                                newRows.splice(rowIndex, 1);
                                setTableForm({ ...tableForm, rows: newRows });
                              }}
                              className="p-2 text-red-500 hover:bg-red-100 rounded"
                            >
                              &times;
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'faq' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Question
                      </label>
                      <RichTextEditor
                        value={faqForm.question}
                        onChange={(value) => setFaqForm({ ...faqForm, question: value })}
                        placeholder="Enter the question"
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Answer
                      </label>
                      <RichTextEditor
                        value={faqForm.answer}
                        onChange={(value) => setFaqForm({ ...faqForm, answer: value })}
                        placeholder="Enter the answer"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'image' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={imageForm.src}
                        onChange={(e) => setImageForm({ ...imageForm, src: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Alt Text
                      </label>
                      <input
                        type="text"
                        value={imageForm.alt}
                        onChange={(e) => setImageForm({ ...imageForm, alt: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                        placeholder="Image description"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Caption (optional)
                      </label>
                      <input
                        type="text"
                        value={imageForm.caption}
                        onChange={(e) => setImageForm({ ...imageForm, caption: e.target.value })}
                        className="w-full p-3 border text-gray-800 border-gray-300 rounded-md placeholder-gray-500"
                        placeholder="Image caption"
                      />
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'quote' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Quote Text
                      </label>
                      <RichTextEditor
                        value={quoteForm.text}
                        onChange={(value) => setQuoteForm({ ...quoteForm, text: value })}
                        placeholder="Enter the quote text"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-800">
                        Author (optional)
                      </label>
                      <RichTextEditor
                        value={quoteForm.author}
                        onChange={(value) => setQuoteForm({ ...quoteForm, author: value })}
                        placeholder="Quote author"
                        className="min-h-[60px]"
                      />
                    </div>
                  </div>
                )}
                
                {currentBlockType === 'divider' && (
                  <p className="text-gray-600">
                    A divider will be added to separate content sections.
                  </p>
                )}
              </div>
              
              <button
                type="button"
                onClick={addBlock}
                className="px-4 py-2 bg-[#FF6A00] text-white rounded hover:bg-[#E63C00] transition-colors"
              >
                Add Block
              </button>
            </div>
            
            {/* Content Preview */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Content Blocks</h3>
              
              {blog.content.length === 0 ? (
                <p className="text-gray-600 italic">No content blocks added yet.</p>
              ) : (
                <div className="space-y-4">
                  {blog.content.map((block, index) => (
                    <div 
                      key={index} 
                      className={`border ${block.isTemplateStart ? 'border-[#FF6A00]' : 'border-gray-200'} rounded-lg p-4 bg-white`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 capitalize flex items-center">
                          {block.type} Block
                          {block.isTemplateStart && (
                            <span className="ml-2 px-2 py-0.5 bg-orange-100 text-[#FF6A00] text-xs rounded-full">
                              {block.templateName}
                            </span>
                          )}
                        </span>
                        <div className="flex space-x-2">
                          {!block.isTemplateStart && editingBlockIndex !== index && (
                            <button
                              type="button"
                              onClick={() => startBlockEdit(index)}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded hover:bg-blue-200 transition-colors"
                              title="Edit Block"
                            >
                              Edit
                            </button>
                          )}
                          {block.isTemplateStart && (
                            <button
                              type="button"
                              onClick={() => startTemplateEdit(index)}
                              className="p-1 text-[#FF6A00] hover:bg-orange-50 rounded"
                              title="Edit Template"
                            >
                              Edit Template
                            </button>
                          )}
                          {editingBlockIndex !== index && (
                            <>
                              <button
                                type="button"
                                onClick={() => moveBlock(index, 'up')}
                                disabled={index === 0}
                                className="p-1 text-gray-500 hover:bg-gray-100 rounded disabled:opacity-50"
                                title="Move Up"
                              >
                                ↑
                              </button>
                              <button
                                type="button"
                                onClick={() => moveBlock(index, 'down')}
                                disabled={index === blog.content.length - 1}
                                className="p-1 text-gray-500 hover:bg-gray-100 rounded disabled:opacity-50"
                                title="Move Down"
                              >
                                ↓
                              </button>
                              <button
                                type="button"
                                onClick={() => removeBlock(index)}
                                className="p-1 text-red-500 hover:bg-red-100 rounded"
                                title="Remove Block"
                              >
                                &times;
                              </button>
                            </>
                          )}
                          {editingBlockIndex === index && (
                            <>
                              <button
                                type="button"
                                onClick={saveBlockEdit}
                                className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded hover:bg-green-200 transition-colors"
                                title="Save Changes"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={cancelBlockEdit}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
                                title="Cancel Edit"
                              >
                                Cancel
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {editingBlockIndex === index ? (
                        <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded">
                          <h4 className="text-sm font-medium text-blue-800 mb-3">
                            Editing {block.type.charAt(0).toUpperCase() + block.type.slice(1)} Block
                          </h4>
                          {renderInlineBlockEditor(block, index)}
                        </div>
                      ) : (
                        <div className="mt-2 p-3 bg-gray-50 text-gray-600 rounded border border-gray-100">
                          {block.type === 'heading' && (
                            <p>Level {block.level} heading: <strong>{block.text}</strong></p>
                          )}
                          
                          {block.type === 'paragraph' && (
                            <p className="line-clamp-2">{block.text}</p>
                          )}
                          
                          {block.type === 'list' && (
                            <div>
                              <p>{block.style === 'ordered' ? 'Numbered list' : 'Bullet list'} with {block.items.length} items</p>
                              <ul className="pl-5 list-disc text-sm text-gray-600">
                                {block.items.slice(0, 3).map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                                {block.items.length > 3 && <li>...</li>}
                              </ul>
                            </div>
                          )}
                          
                          {block.type === 'table' && (
                            <p>Table with {block.headers.length} columns and {block.rows.length} rows</p>
                          )}
                          
                          {block.type === 'faq' && (
                            <p>
                              <strong>Q: </strong>{block.question}<br />
                              <strong>A: </strong><span className="line-clamp-1">{block.answer}</span>
                            </p>
                          )}
                          
                          {block.type === 'image' && (
                            <p>Image: {block.caption || block.alt || block.src}</p>
                          )}
                          
                          {block.type === 'quote' && (
                            <p>Quote from {block.author || 'unknown'}</p>
                          )}
                          
                          {block.type === 'divider' && (
                            <p>Horizontal divider</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 bg-white p-6 border border-gray-200 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <BlockRenderer blocks={blog.content} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor; 