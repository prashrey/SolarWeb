import React from 'react';
import SearchWidget from './SearchWidget';
import ResultPanel from './ResultPanel'

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <SearchWidget />
      <ResultPanel />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;