import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [memberList, setMemberList] = useState([{
    name: 'kyle',
    age: '31'
    }, {
    name: 'lauren',
    age: '29'
  }])
  const [user, setUser] = useState({
    name: '',
    age: ''
  })

  useEffect(() => {
  },[memberList])

    const handleChange = event => {
      const name = event.target.name
      const value = event.target.value;
      setUser({ ...user, [name]: value});
    }

    const handleSubmit = event => {
      event.preventDefault()
      setMemberList(old => [...old, user])
    }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" name="name" value={user.name} onChange={e=> handleChange(e)}/>
        <input type="text" name="age" value={user.age} onChange={e=> handleChange(e)}/>
        <button>Add to member list</button>
      </form>
    </div>
  );
}

export default App;
