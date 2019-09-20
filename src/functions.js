import React, {useState, useEffect} from "react"


const Functions = () => {
    const [memberList, setMemberList] = useState([{
        name: 'kyle',
        email: 'kyle.ri@a.com',
        role: 'front-end',
        isShow: false
    }])
    
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
        else if(
            !email.includes('@') || 
            !email.includes('.') ||
            email.charAt(0)==='@' ||
            email.charAt(0)==='.' || 
            email.charAt(email.length-1)==='@' ||
            email.charAt(email.length-1)==='.'
            ) {
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
        if(!isEdit) {
            memberList.splice(userId, 1)
            setMemberList(prev => [...prev])
        }
        else alert('Cannot delete while editing a user')
    }
    
    const handleChange = event => {
        const {name, value} = event.target
        setUser({ ...user, [name]: value});
    }
    
    const handleShow = ind => {
        memberList[ind].isShow = !memberList[ind].isShow;
        setMemberList(prev => [...prev])
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
    
    const handleButtons = (event, index) => {
        const buttonType = event.target.getAttribute('name')
        if (buttonType==="show") {
            handleShow(index)
        }
        if(buttonType==="edit"){
            handleEdit(index)
        }
        if(buttonType==="delete") {
            deleteUser(index)
        }
    }
}

export default Functions