import React, {useEffect} from "react"
import Edit from "./Edit"

const Form = (props) => {
    const {isEdit, memberToEdit, setUser, 
        memberList, handleSubmit, user, handleChange,
        handleButtons} = props

    useEffect(()=> {
        if(isEdit) {
            setUser(memberList[memberToEdit])
        }
        // eslint-disable-next-line
    }, [memberToEdit])

    return (
        <div>
            <Edit 
                memberList={memberList}
                handleButtons={handleButtons}
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
                <select 
                    className="select-input" 
                    name="role" 
                    value={user.role} 
                    onChange={handleChange}
                >
                    <option value="default">- Choose Role -</option>
                    <option value="front-end">Front-end</option>
                    <option value="back-end">Back-end</option>
                    <option value="content-creator">Content Creator</option>
                    <option value="designer">Designer</option>
                    <option value="other">Other</option>
                </select>
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