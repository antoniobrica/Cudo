import React, { Suspense } from 'react';
import { initI18n } from '@cudo/mf-core';
import { LazyLoading } from '@cudo/shared-components'
// import styles from './app.module.scss';
// import AddSession from './add-session/add-session';
import SessionList from './components/session-listing/session-listing'

const defaultLanguage = 'en-GB';
const supportedLanguages = [defaultLanguage, 'en-GB'];
initI18n('/assets/i18n/{{lng}}.json', defaultLanguage);

export function App() {
  console.log(' 1 mf meeting app')
  return (
    <Suspense fallback={<LazyLoading />}>
      <div>
        <SessionList />
      </div>
    </Suspense>
    
  );
  
}

export default App;
