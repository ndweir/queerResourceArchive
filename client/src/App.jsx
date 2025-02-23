import React, { useState } from 'react';

//Components
import { DemoThingy } from './components/DemoThingy';
import { ArchiveHeader } from './components/ArchiveHeader';

import './App.css';


export default function App() {


  return (
    <div className='primaryContainer'>
      <div className='secondaryContainer'>
        <div className='headerContainer'>
          <ArchiveHeader />
        </div>

        <div className='sideContainer'>
          <DemoThingy />
        </div>
      </div>
    </div>
  );
}
