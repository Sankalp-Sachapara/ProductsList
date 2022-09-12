import React from 'react';
import ProductList from './components/ProductList';
import Logo from './logo.png';

function App() {
  return (
    <div className='font-serif'>
      <nav className='p-5 border-b-2'>
        <img src={Logo} alt='logo'/>
      </nav>
      
      <ProductList />
    </div>
  );
}

export default App;
