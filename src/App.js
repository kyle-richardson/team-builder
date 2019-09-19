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
  // console.log(memberList);
  },[memberList])

  const editUser = userInfo => {
    memberList[memberToEdit] = userInfo 
    setMemberToEdit('')
  }

  const deleteUser = userId=> {
    memberList.splice(userId, 1)
    setMemberList(prev => [...prev])
  }

  const handleChange = event => {
    const {name, value} = event.target
    setUser({ ...user, [name]: value});
  }

  const handleSubmit = event => {
    event.preventDefault()
    if(isEdit) {
      setIsEdit(false)
      editUser(user)
    }
    else setMemberList(prev => [...prev, user])
    setUser({
      name: '',
      email: '',
      role: ''
    })
  }

  const handleEdit = (index) => {
    console.log(`starting to edit user at index ${index}`)
    setIsEdit(true)
    setMemberToEdit(index)
  }

  return (
    <div className="App">
      <h1>Lambda Member List</h1>
      <Form 
        user={user} 
        setUser={setUser}
        handleChange = {handleChange}
        handleSubmit= {handleSubmit}
        memberList= {memberList}
        handleEdit={handleEdit}
        setMemberToEdit={setMemberToEdit}
        memberToEdit={memberToEdit}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
