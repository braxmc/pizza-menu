import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className='conatiner'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}


// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />);