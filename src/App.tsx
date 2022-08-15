import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes, { RouterAuth } from './routes';
import './App.css';

function App() {
  const Element = useRoutes(routes);

  return (
    <div className="app-content">
      <RouterAuth>{Element}</RouterAuth>
    </div>
  );
}

export default App;
