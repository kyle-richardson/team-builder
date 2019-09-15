import React from "react"

const Edit = (props) => {
    const members = props.memberList
    return (
        <div>
            <h2>Member List:</h2>
            {members.map(member => {
                return (
                    <div className="member-card">
                        <h3>Name: {member.name}</h3>
                        <span 
                            className="edit-button" 
                            name="edit" 
                            onClick={e=> props.handleEdit(e)}>
                                Edit
                        </span>
                        <span
                            className="delete-button"
                            name="delete"
                            onCLick={console.log('deleted')}>
                                Delete
                        </span>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </div> 
                )
            })}
        </div>
    )
}

export default Edit