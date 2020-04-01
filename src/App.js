import React, {useState} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App() {

  const usersData = [
    { id : 1, name: 'marry', username: 'ppopins'},
    { id : 2, name: 'harry', username: 'potter'},
    { id : 3, name: 'drew', username: 'ahn'}
  ]

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const initialFormState = {id:null, name:'', username:''}
  const [currentUser, setCurrentUser] = useState(initialFormState)

  function addUser(user){
    user.id = users.length+1
    setUsers([...users, user])
  }

  function deleteUser(id){
    setUsers(users.filter(user=>user.id!==id))
  }

  function editRow(user){
    setEditing(true)
    setCurrentUser({id : user.id, name: user.name, username: user.username})
  }

  function updateUser(id, updatedUser){
    setEditing(false)
    setUsers(users.map(user=>(user.id===id? updatedUser : user )))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
               <h2>Edit user</h2>
               <EditUserForm 
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
               />
            </div>
            ):(
            <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
