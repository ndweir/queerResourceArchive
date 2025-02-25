import React, { useState } from 'react';
import SquareLoader from 'react-spinners/SquareLoader';

//Components
import { DemoThingy } from './components/DemoThingy';
import { ArchiveHeader } from './components/ArchiveHeader';

//Modules
import { formatTimestamp } from './modules/formatTimeStamp';

import './App.css';
import { IntroBlurb } from './components/IntroBlurb';


export default function App() {
  const [waybackData, setWaybackData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowBlurb = () => {
    setWaybackData(null);
  }


  return (
    <div className='primaryContainer'>
      <div className='secondaryContainer'>
        <div className='headerContainer'>
          <ArchiveHeader handleShowBlurb={handleShowBlurb} />
        </div>

        <div className='sideContainer'>
          <DemoThingy waybackData={waybackData} setWaybackData={setWaybackData}
            isLoading={isLoading} setIsLoading={setIsLoading}
          />
        </div>
        <div
          className='contentContainer'
          style={{
            textAlign: 'center',
          }}>
          {!waybackData && !isLoading &&
            < IntroBlurb />
          }
          {isLoading &&
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SquareLoader loading={isLoading} size={75} aria-label='Loading Spinner' speedMultiplier={2} color='hotpink' />
            </div>
          }
          {waybackData && !isLoading &&
            <div className='contentDisplay'>
              <h3><b>Site:</b> {waybackData.url}</h3>
              <h4><b>Archived Date:</b> {formatTimestamp(waybackData.archived_snapshots.closest.timestamp)} </h4>
              <h5><b>Link:</b>
                <a style={{
                  cursor: 'pointer',
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
