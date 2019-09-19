import React from "react"

const Edit = (props) => {
    const members = props.memberList
    return (
        <div>
            {/* <h2>Member List:</h2> */}
            <div className="members-container">
                {members.map((member,ind) => {
                    return (
                        <div className="member-card">
                            <h3>Name: {member.name}</h3>
                            <span 
                                className="edit-button" 
                                name="edit" 
                                onClick={()=> props.handleEdit(ind)}>
                                    Edit
                            </span>
                            <span
                                className="delete-button"
                                name="delete"
                                onClick={()=> props.deleteUser(ind)}>
                                    Delete
                            </span>
                            <p>Email: {member.email}</p>
                            <p>Role: {member.role}</p>
                        </div> 
                    )
                })}
            </div>
            
        </div>
    )
}

export default Edit