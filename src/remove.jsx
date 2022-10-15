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
  const [items, setItems] = useState(data)

  function deleteItem(name) {
    const newItems = items.filter((el) => el.name != name)
    setItems(newItems)
  }

  // useEffect(()=>{
  //     setItems()
  // },[])

  return (
    <div>
      <p>Remove items by clicking the remove button</p>
      {/* <p>{items.map((el)=>el.name)}</p> */}
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Remove</th>
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}