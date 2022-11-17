import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Api() {
    const [storeData, setStoreData] = useState([]);

    function getData() {
        axios.get('https://mocki.io/v1/de795119-ac98-4ec9-a262-0e76c67419fe') //ragu's api
        .then((success)=>setStoreData(success.data))
        .catch((error)=>console.log('Error msg ', error))
    }
    useEffect(()=>{getData()},[])
    return(
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>userId</th>
                        {/* <th>Id</th>
                        <th>Title</th> */}
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (storeData).map((el)=>{
                            return(
                                <tr>
                                    <td>{el.task}</td>
                                    {/* <td>{el.id}</td>
                                    <td>{el.title}</td> */}
                                    <td>{el.timestamp}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}