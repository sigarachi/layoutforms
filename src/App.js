import React from 'react';
import data from './dataset/data.json'
import * as Components from './components'

function App() {
  const Component = Components[data.type]

  return (
    <div className="App">
      <Component props={data} />
    </div>
  );
}

export default App;
