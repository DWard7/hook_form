import React from 'react';
import Display from './components/Display.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);


  return (
    <div>
      <div className="card shadow">
        <div className="card-body">
          <Form users={users} setUsers={setUsers} />
          <Display users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App