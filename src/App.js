import Tabs from './components/Tabs';
import './App.css';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      label:"Tab 1",
      content:"Tab 1 content is showing here",
      isSelected: false
    },
    {
      label:"Tab 2",
      content:"Tab 2 content is showing here.",
      isSelected: false
    },
    {
      label:"Tab 3",
      content:"Tab 3 content is showing here.",
      isSelected: false
    }
  ]);

  return (
    <div className="App">
      <div>
        {tabs.map((tab, i) => {
          return(
            <Tabs index={i} label={tab.label} tabs={tabs} setTabs={setTabs}/>
          )
        })}
      </div>
      <div className ="tabStyle">
        {tabs.map((tab) => {
          return(
            tab.isSelected && <div>{ tab.content }</div>
        )})}
      </div>
    </div>
  );
}

export default App;