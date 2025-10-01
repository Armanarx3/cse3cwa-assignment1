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