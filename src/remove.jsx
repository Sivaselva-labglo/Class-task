import React, { useEffect } from "react";
import { useState } from "react";

export default function Removeitems() {
  const data = [
    {
      id: 1,
      name: 'Nandhini'
    },
    {
      id: 2,
      name: 'Sivaa'
    },
    {
      id: 3,
      name: 'Praveen'
    },
    {
      id: 4,
      name: 'Madhu'
    },
    {
      id: 5,
      name: 'Ragu'
    },
    {
      id: 6,
      name: 'Kani'
    },
    {
      id: 7,
      name: 'Satheesh'
    }
  ]
  const newUser = []
  const [items, setItems] = useState(data)
  const [users, setUsers] = useState(newUser)

  function deleteItem(name) {
    const newItems = items.filter((el) => el.name != name)
    setItems(newItems)
  }

  function addUser(e) {
    setUsers({...users,[e.target.name] : e.target.value})
  }
  console.log('userS ', users);

  function addUsers(e) {
    e.preventDefault() 
    console.log('Addusers ', users);
    const list = items.concat(users)
    console.log('List ', list)
    setItems(list)
  }
  // useEffect(()=>{
  //     setItems()
  // },[])

  return (
    <div>
        <p>Add Users</p>
        <input type='number' name='id' value={Number(users.id)} onChange={addUser} /> <br/> <br/>
        <input type='text' name='name' value={users.name} onChange={addUser} /> <br/> <br/>
        <button onClick={addUsers}>Add User</button>

      <p>Remove users by clicking the remove button</p>
      {/* <p>{items.map((el)=>el.name)}</p> */}
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((elements) => {
              return (
                <tr>
                  <td>{elements.id}</td>
                  <td>{elements.name}</td>
                  <td><button onClick={() => deleteItem(elements.name)}>remove</button></td>
                  <td><button>edit</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}