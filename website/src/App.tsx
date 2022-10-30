import { useState } from 'react';
import ProductsList from './components/products-list';
import './app.css';

const App = () => {
  const [port, setPort] = useState<number>(8000);
  const [products, setProducts] = useState<string[]>([]);
  const [adding, setAdding] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<string>('');

  const handlePortUpdate = (e: any) => {
    setPort(e.currentTarget.value);
  };

  const sendRequest = () => {
    fetch(`http://localhost:${port}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  const handleNewProductChange = (e: any) => {
    setNewProduct(e.currentTarget.value);
  };

  const toggleAdd = () => {
    setAdding((prev: boolean): boolean => !prev);
  };

  const sendNewProduct = () => {
    const obj = { newProduct };
    console.log(obj);
    fetch(`http://localhost:${port}`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className='app'>
      <input
        value={port}
        type='number'
        onChange={handlePortUpdate}
      />
      <button onClick={sendRequest}>Request</button>
      <button onClick={toggleAdd}>{adding ? 'Cancel' : 'Add'}</button>
      {adding && (
        <>
          <hr />
          <input
            onChange={handleNewProductChange}
            value={newProduct}
          />
          <button onClick={sendNewProduct}>Submit</button>
          <hr />
        </>
      )}
      <ProductsList products={products} />
    </div>
  );
};

export default App;
