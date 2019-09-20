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
                            <div className="button-container">
                                <span 
                                    className="show-button"
                                    name="show"
                                    onClick={(e)=>props.handleButtons(e,ind)}>
                                        {member.isShow ? "Hide Details" : "Show Details"}
                                </span>
                                <span 
                                    className="edit-button" 
                                    name="edit" 
                                    onClick={(e)=>props.handleButtons(e,ind)}>
                                        Edit
                                </span>
                                <span
                                    className="delete-button"
                                    name="delete"
                                    onClick={(e)=>props.handleButtons(e,ind)}>
                                        Delete
                                </span>
                            </div>
                        </div> 
                        <div 
                            className={member.isShow ? 'show' : 'hide'}
                        >
                            <p>Email: {member.email}</p>
                            <p>Role: {member.role}</p>
                        </div>
                        
                    </div> 
                )
            })}
        </div>
    )
}

export default Edit