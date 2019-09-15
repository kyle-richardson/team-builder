import React from "react"
import Edit from "./Edit"

const Form = (props) => {

    return (
        <div>
            <Edit memberList={props.memberList} handleEdit={props.handleEdit}/>
            <form onSubmit={(e)=> props.handleSubmit(e)}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={props.user.name} 
                    onChange={e=> props.handleChange(e)}/>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    value={props.user.email} 
                    onChange={e=> props.handleChange(e)}/>
                <input 
                    type="text" 
                    placeholder="Role" 
                    name="role" 
                    value={props.user.role} 
                    onChange={e=> props.handleChange(e)}/>
                <button>Add to member list</button>
                
            </form>
        </div>
        
    )
}

export default Form