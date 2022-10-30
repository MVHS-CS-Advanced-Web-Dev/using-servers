import './app.css';
import { useState } from 'react';

const App2 = () => {
  const [key, setKey] = useState<string>('asldkfjsldkfj');
  const [value, setValue] = useState<string>('');
  const [gettingKey, setGettingKey] = useState<string>('');

  const keyChange = (e: any) => {
    setKey(e.currentTarget.value);
  };

  const valueChange = (e: any) => {
    setValue(e.currentTarget.value);
  };

  const setData = () => {
    localStorage.setItem(key, value);
    setKey('');
    setValue('');
  };

  const gettingKeyChange = (e: any) => {
    setGettingKey(e.currentTarget.value);
  };

  const getKey = () => {
    const value = localStorage.getItem(gettingKey);
    console.log(value);
  };

  return (
    <div className='app'>
      <input
        onChange={keyChange}
        value={key}
      />
      <input
        onChange={valueChange}
        value={value}
      />
      <button onClick={setData}>set</button>
      <hr />
      <input
        value={gettingKey}
        onChange={gettingKeyChange}
      />
      <button onClick={getKey}>get</button>
    </div>
  );
};

export default App2;
