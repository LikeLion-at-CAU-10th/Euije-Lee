import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Lists from './pages/Lists';
import List from './pages/List';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lists />}>
          <Route path=":memId" element={<List/>}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App