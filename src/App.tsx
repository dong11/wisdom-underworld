import { useRoutes } from 'react-router-dom';
import routes, { RouterAuth } from './routes';

import "./assets/style/frame.scss";
import './App.css';

function App() {
  const Element = useRoutes(routes);

  return (
    <div className="app">
      <RouterAuth>{Element}</RouterAuth>
    </div>
  );
}

export default App;
