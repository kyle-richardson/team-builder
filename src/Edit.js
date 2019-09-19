import React from "react"

const Edit = (props) => {
    const members = props.memberList
    return (
        <div className="members-container">
            {members.map((member,ind) => {
                return (
                    <div className="member-card">
                        <div className="header-card">
                            <h3 >{member.name}</h3>
                            <span 
                                className="show-button" 
                                name="show-more" 
                                onClick={()=> props.handleShow(ind)}>
                                    Show details
                            </span>
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
                        </div> 
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div> 
                )
            })}
        </div>
    )
}

export default Edit