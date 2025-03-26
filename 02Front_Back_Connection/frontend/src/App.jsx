import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [guyz, setGuyz] = useState([]);

  useEffect(() => {
    axios
      .get('/api/guyz')
      .then((res) => {
        setGuyz(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Frontend of basic app</h1>
      <p>Guyz: {guyz.length}</p>

      {guyz.map((guy, index) => (
        <div key={guy.id}>
          <h3>{guy.title}</h3>
          <p>{guy.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
