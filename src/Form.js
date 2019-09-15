import React from "react"
import Edit from "./Edit"

const Form = (props) => {

    return (
        <div>
            <Edit memberList={props.memberList} handleEdit={props.handleEdit}/>
            <form className="user-form" onSubmit={(e)=> props.handleSubmit(e)}>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={props.user.name} 
                    onChange={e=> props.handleChange(e)}/>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    value={props.user.email} 
                    onChange={e=> props.handleChange(e)}/>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Role" 
                    name="role" 
                    value={props.user.role} 
                    onChange={e=> props.handleChange(e)}/>
                <button className="add-button">Add to member list</button>
                
            </form>
        </div>
        
    )
}

export default Form