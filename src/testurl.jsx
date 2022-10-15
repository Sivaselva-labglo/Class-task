import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Testurl() {
    const [url, setUrl] = useState()

    function getData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((saveData) => console.log('saveData of w3schools', saveData.json()))
            .catch((error) => console.log(error))
    }
    useEffect(getData(), [])
    return (
        <div>
            <p>Welcome</p>
        </div>
    )

}

