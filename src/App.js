import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./Form"

function App() {
  const [memberList, setMemberList] = useState(
    [{
      name: 'kyle',
      email: 'test@test.com',
      role: 'front-end'
    }, 
    {
      name: 'lauren',
      email: 'test2@test.com',
      role: 'content creator'
    }])
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  })

  const [isEdit, setIsEdit] = useState(false)
  const [memberToEdit, setMemberToEdit] = useState({})

  useEffect(() => {
  console.log(memberList);
  },[memberList])

    const handleChange = event => {
      const name = event.target.name
      const value = event.target.value;
      setUser({ ...user, [name]: value});
    }

    const handleSubmit = event => {
      event.preventDefault()
      setMemberList(prev => [...prev, user])
    }

    const handleEdit = event => {

      setIsEdit(true)
      console.log(`editing ${event.target.name}`)
    }

  return (
    <div className="App">
      <h1>Lambda Member List</h1>
      <Form 
        user={user} 
        handleChange = {handleChange}
        handleSubmit= {handleSubmit}
        memberList= {memberList}
        handleEdit={handleEdit}
        setMemberToEdit={setMemberToEdit}
      />
    </div>
  );
}

export default App;
