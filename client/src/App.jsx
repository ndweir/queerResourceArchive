import React, { useState } from 'react';

//Components
import { DemoThingy } from './components/DemoThingy';
import { ArchiveHeader } from './components/ArchiveHeader';

//Modules
import { formatTimestamp } from './modules/formatTimeStamp';

import './App.css';


export default function App() {
  const [waybackData, setWaybackData] = useState(null);


  return (
    <div className='primaryContainer'>
      <div className='secondaryContainer'>
        <div className='headerContainer'>
          <ArchiveHeader />
        </div>

        <div className='sideContainer'>
          <DemoThingy waybackData={waybackData} setWaybackData={setWaybackData} />
        </div>
        <div
          className='contentContainer'
          style={{
            textAlign: 'center',
          }}>
          {waybackData &&
            <div className='contentDisplay'>
              <h3><b>Site:</b> {waybackData.url}</h3>
              <h4><b>Archived Date:</b> {formatTimestamp(waybackData.archived_snapshots.closest.timestamp)} </h4>
              <h5><b>Link:</b>
                <a style={{
                  cursor: 'pointer',
                  border: '1px solid blue',
                  borderRadius: '25px',
                  paddingLeft: '5px',
                  paddingRight: '5px'
                }}
                  href={waybackData.archived_snapshots.closest.url} target="_blank">
                  {waybackData.archived_snapshots.closest.url}
                </a>
              </h5>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
