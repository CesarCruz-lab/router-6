import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Page: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const routes = [
  {
    path: '/',
    Component: Page,
    accountTypeRequired: [],
    permissions: null,
    routes: null,
  },
  {
    path: 'page2',
    Component: Page,
    accountTypeRequired: [],
    permissions: null,
    routes: null,
  },
  {
    path: 'page3',
    Component: Page,
    accountTypeRequired: [],
    permissions: null,
    routes: [
      {
        path: 'subpage',
        Component: Page,
        accountTypeRequired: [],
        permissions: null,
        routes: null,
      },
    ],
  },
];

function App() {
  const render = (routeList: any) => {
    return routeList.map((route: any) => {
      if (route.routes)
        return (
          <Route path={route.path}>
            {route.Component && <Route path="" element={<route.Component title={route.path} />} />}
            {render(route.routes)}
          </Route>
        );

      return <Route path={route.path} element={<route.Component title={route.path} />} />;
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{render(routes)}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
