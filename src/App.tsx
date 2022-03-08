import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Page: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Page title="Home Page" />} />
          <Route path="page2" element={<Page title="Page 2" />} />
          <Route path="page3">
            <Route path="" element={<Page title="SubPage" />} />
            <Route path="subpage1" element={<Page title="Subpage1"></Page>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
