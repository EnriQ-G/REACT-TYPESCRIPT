import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

  const initial_state = [
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'hace de moderador a veces'
    },
    {
      nick: 'sergio_serrano',
      subMonths: 4,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    }
  ]

  interface Sub {
    nick: string
    avatar: string
    subMonths: number
    description?: string
  }

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])
  
  useEffect(() =>{
    setSubs(initial_state)
  }, [])


  return (
    <div className="App">
      <h1>Enrique subs</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
