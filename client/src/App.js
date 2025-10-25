import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let resultado = await fetch('http://localhost:5000/api/data');
            let data= await resultado.json();
            setData(data);
            console.log(data);
            //.catch(err => console.error('Error fetching data:', err));  
            }
        fetchData();
  }, []);

  return (
    <div className="App">
      <h1>TP Final GPTavoloni</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;