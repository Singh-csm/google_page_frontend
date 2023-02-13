import React from 'react';

import Logo from './components/Logo';
import WordBox from './components/WordBox';
import SearchButton from './components/SearchButton';
import LuckyButton from './components/LuckyButton';
import LanguageNote from './components/LanguageNote';

export default function App() {
  return (
    <div style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WordBox />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          marginTop: '5px',
        }}
      >
        <SearchButton />
        <LuckyButton />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LanguageNote />
      </div>
    </div>
  );
}
