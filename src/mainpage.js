import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ContentPage({ uname }) {

    const [apiData, setApiData] = useState({});

    function loadApiData() {
        axios.get('https://swapi.dev/api/people/')
            .then((success) => {
                setApiData(success.data)
                console.log('success data ', success.data)
            })
            .catch((failed) => console.log(failed))
    }

    useEffect(() => loadApiData(), []);
    return (
        <>
            <h1>Welcome!</h1>
            {/* <h4>{uname}</h4> */}
            {
                apiData.results?.filter((el) => el.name === `${uname}`).map((vl) => {
                    return (
                        <>
                            <h4>Name : {vl.name}</h4>
                            <h4>HairColor : {vl.hair_color}</h4>
                            <h4>EyeColor : {vl.eye_color}</h4>
                        </>
            
            )
        })
    }
        </>
    )

}