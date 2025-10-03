// app/components/TabsGenerator.tsx
'use client';

import React, { useState, useEffect } from 'react';

// Define a type for a single tab for TypeScript
interface Tab {
  id: number;
  title: string;
  content: string;
}


const TabsGenerator = () => {
    const [outputCode, setOutputCode] = useState('');
const generateOutputCode = () => {
    if (tabs.length === 0) {
      setOutputCode('');
      return;
    }
  
    const tabButtons = tabs.map((tab, index) => 
      `    <button class="tab-link" style="padding: 10px 15px; border: 1px solid #ccc; background-color: #f1f1f1; cursor: pointer;" onclick="openTab(event, 'tab${index}')">${tab.title}</button>`
    ).join('\n');
  
    const tabContents = tabs.map((tab, index) => 
      `    <div id="tab${index}" class="tab-content" style="display: ${index === 0 ? 'block' : 'none'}; padding: 20px; border: 1px solid #ccc; border-top: none;">
        <p>${tab.content}</p>
      </div>`
    ).join('\n');
  
    const finalCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Tabs</title>
  </head>
  <body>
  
    <h2>My Tabs</h2>
    <div class="tab" style="overflow: hidden; border: 1px solid #ccc; background-color: #f1f1f1;">
  ${tabButtons}
    </div>
  
  ${tabContents}
  
    <script>
      function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "#f1f1f1";
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.style.backgroundColor = "#ddd";
      }
      // Open the first tab by default
      document.getElementsByClassName("tab-link")[0].click();
    <\/script>
  
  </body>
  </html>`;
  
    setOutputCode(finalCode);
  };
    
  const [tabs, setTabs] = useState<Tab[]>([]);

  // Effect to LOAD tabs from localStorage when the component mounts
  useEffect(() => {
    const storedTabs = localStorage.getItem('tabs');
    if (storedTabs) {
      setTabs(JSON.parse(storedTabs));
    }
  }, []);

  // Effect to SAVE tabs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs));
  }, [tabs]);

  const addTab = () => {
    // Limit to 15 tabs as per the grading criteria
    if (tabs.length >= 15) {
      alert("You can have a maximum of 15 tabs.");
      return;
    }
    const newTab: Tab = {
      id: Date.now(), // Simple unique ID
      title: `Tab ${tabs.length + 1}`,
      content: 'Enter your content here.',
    };
    setTabs([...tabs, newTab]);
  };

  const removeTab = (id: number) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };
  
  const updateTab = (id: number, field: 'title' | 'content', value: string) => {
    setTabs(
      tabs.map(tab => (tab.id === id ? { ...tab, [field]: value } : tab))
    );
  };

  return (
    <div>
      <button onClick={addTab}>[+] Add Tab</button>
      <hr />
      <button onClick={generateOutputCode}>Generate Output Code</button>

    <h3>Output:</h3>
    <textarea
      readOnly
      value={outputCode}
      style={{ width: '100%', height: '300px', fontFamily: 'monospace' }}
      placeholder="Click the button to generate the HTML code..."
    />
      {tabs.map((tab, index) => (
        <div key={tab.id}>
          <h3>Tab {index + 1}</h3>
          <input
            type="text"
            value={tab.title}
            onChange={(e) => updateTab(tab.id, 'title', e.target.value)}
            placeholder="Tab Title"
          />
          <textarea
            value={tab.content}
            onChange={(e) => updateTab(tab.id, 'content', e.target.value)}
            placeholder="Tab Content"
          />
          <button onClick={() => removeTab(tab.id)}>[-] Remove</button>
        </div>
      ))}
    </div>
);
};

export default TabsGenerator;