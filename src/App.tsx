import React from 'react';
import Routes from './routes';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <div className="fftl">
        <Link to="/">Home</Link>
        <header>fftl</header>
        <Routes />
      </div>
  );
}

export default App;
