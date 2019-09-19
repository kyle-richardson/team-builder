import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./Form"

function App() {
  const [memberList, setMemberList] = useState([])
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    isShow: false
  })

  const [isEdit, setIsEdit] = useState(false)
  const [memberToEdit, setMemberToEdit] = useState({})

  useEffect(() => {
  },[memberList])

  const resetUser = ()=> {
    setUser({
      name: '',
      email: '',
      role: '',
      isShow: false
    })
  }
  const editUser = userInfo => {
    if(checkValid(user)) {
      memberList[memberToEdit] = userInfo 
      setMemberToEdit('')
      resetUser()
      setIsEdit(false)
    }  
  }

  const checkValid = userInfo => {
    const {name, email, role} = userInfo
    let bool = true
    if(name==='') {
      alert('Name cannot be empty')
      bool = false
    }
    if(email==='') {
      alert('Email cannot be empty')
      bool = false
    }
    else if(!(email.includes('@') && email.includes('.'))){
      alert('Email is not valid')
      bool = false
    }
    if(role==='default' || role==='') {
      alert('Please choose a role')
      bool = false
    }
    return bool
  }

  const deleteUser = userId=> {
    memberList.splice(userId, 1)
    setMemberList(prev => [...prev])
  }

  const handleChange = event => {
    const {name, value} = event.target
    setUser({ ...user, [name]: value});
  }

  const handleShow = ind => {
    memberList[ind].isShow = true;
  }

  const handleSubmit = event => {
    event.preventDefault()
    if(isEdit) {
      editUser(user)
    }
    else if (checkValid(user)) {
      setMemberList(prev => [...prev, user])
      resetUser()
    }
  }

  const handleEdit = (index) => {
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
        handleShow={handleShow}
      />
    </div>
  );
}

export default App;
