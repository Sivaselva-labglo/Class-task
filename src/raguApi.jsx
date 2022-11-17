import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Raguapi() {
    const records = {
        task: ' ',
        completed: '',
        user: '',
    }
    
    const [data, setData] = useState(records);

    function postData() {
        
        axios.get('https://mocki.io/v1/e30fadd3-b1fe-4c06-8882-1b5ef9a8ddd7')
          .then((success) => console.log('AxiosPostedDatas ', success.data))
          .catch((failed) => console.log('AxiosPost Failed ', failed))
      }

      function pushData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
      }
      console.log('data ', data)
    useEffect(()=>{postData()},[])
    return(
        <div>
           <center>
        <form>
          <label>Task </label>
          <br />
          <input type='text' value={data.task} name='task' id='task' onChange={pushData} required />
          <br />

          <label>Completed</label>
          <br />
          <input type='boolean' value={data.completed} name='completed' id='completed' onChange={pushData} required />
          <br />

          <label>User</label>
          <br />
          <input type='text' value={data.user} name='user' id='user' onChange={pushData} required />
          <br />

          <button onClick={postData}>Post</button>
          <br />
          <br />
        </form>
      </center> 
        </div>
    )
}