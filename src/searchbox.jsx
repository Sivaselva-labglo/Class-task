import React from "react";
import { useState } from "react";

export default function Searchbox() {
  const usersList = [
    {
      name: 'Kim-joong-un',
      country: 'North Korea'
    },
    {
      name: 'Joe Biden',
      country: 'USA'
    },
    {
      name: 'Narendra Modi',
      country: 'India'
    },
    {
      name: 'Imran Khan',
      country: 'Pakistan'
    },
    {
      name: 'Ji-Xin-Bing',
      country: 'China'
    },
    {
      name: 'Chichodiya Tharang',
      country: 'Nepal'
    }
  ]

  // const [name, setName] = useState('')
  const [userDetails, setuserDetails] = useState(usersList)

  const filter = (e) => {
    const searchString = e.target.value
    console.log('Filter value is ', searchString)

    if (searchString !== '') {
      const filteredResult = userDetails.filter((user) => {
        return user.name.toLowerCase().startsWith(searchString.toLowerCase());
      });
      setuserDetails(filteredResult);
    } else {
      setuserDetails(usersList);
    }

    // setName(searchString);
  }
  return (
    <div>
      <div>
        <input type='text' name='search' onChange={filter} placeholder='Search name' />
      </div>
      <div>
        {
          (userDetails.length > 0)
            ? userDetails.map((user) => (
              <ul>
                <a href="/"><li>{user.name}</li></a>
                
                <li>{user.country}</li>
              </ul>
            ))
            : <p>No results found</p>
        }
      </div>

    </div>
  )
}