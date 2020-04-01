import React, {useState} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

function App() {

  const usersData = [
    { id : 1, name: 'marry', username: 'ppopins'},
    { id : 2, name: 'harry', username: 'potter'},
    { id : 3, name: 'drew', username: 'ahn'}
  ]

  const [users, setUsers] = useState(usersData)

  function addUser(user){
    user.id = users.length+1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
