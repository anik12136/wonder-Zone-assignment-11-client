import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    { id: 1, title: 'Tab 1', content: 'Tab 1 Content' },
    { id: 2, title: 'Tab 2', content: 'Tab 2 Content' },
    { id: 3, title: 'Tab 3', content: 'Tab 3 Content' }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Render tabs */}
      <div>
        {tabData.map((tab, index) => (
          <button key={tab.id} onClick={() => handleTabClick(index)}>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Render tab content based on activeTab state */}
      <div>
        {tabData[activeTab] && <div>{tabData[activeTab].content}</div>}
      </div>
    </div>
  );
};

export default TabComponent;
