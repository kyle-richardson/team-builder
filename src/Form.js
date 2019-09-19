import React, {useEffect} from "react"
import Edit from "./Edit"

const Form = (props) => {
    const {isEdit, memberToEdit, setUser, 
        memberList, handleEdit, setMemberToEdit, 
        deleteUser, handleSubmit, user, handleChange} = props

    useEffect(()=> {
        if(isEdit) {
            setUser(memberList[memberToEdit])
        }
    }, [memberToEdit])

    return (
        <div>
            <Edit 
                memberList={memberList} 
                handleEdit={handleEdit}
                setMemberToEdit={setMemberToEdit}
                deleteUser={deleteUser}
            />

            <form className="user-form" onSubmit={handleSubmit}>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={user.name} 
                    onChange={handleChange}/>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange}/>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Role" 
                    name="role" 
                    value={user.role} 
                    onChange={handleChange}/>
                <button className="add-button">{
                    isEdit 
                    ? `Save Member Info`
                    : `Add to member list`
                    }</button>
                
            </form>
        </div>
        
    )
}

export default Form