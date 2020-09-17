import React from 'react';

const UserDisplay = (props) => {

    const renderUser = ({userdata}) => {
        if(userdata){
            return userdata.map((item,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div>
            <center>List Of Users</center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUser(props)}
                </tbody>
            </table>
        </div>
    )
}   

export default UserDisplay