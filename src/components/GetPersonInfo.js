import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom"

const GetPersonInfo = () => {

    const { id } = useParams();
    const [person, setPerson] = useState({});
    const keys_details = []
    const details = [];
    const final = [];

    const fetch_person = useCallback(async () => {
        await fetch(`/reveal/${id}`, {method: 'GET', headers : { 
            'Accept': 'application/json'}
           })
        .then(response => response.json())
        .then(data => {setPerson(data.Person_Information)})
    }, [id]);

    useEffect(()=>{
        fetch_person();
    }, [fetch_person]);

    console.log(person);

    for(let k=0; k<Object.keys(person).length; k++){
        keys_details.push(Object.keys(person)[k]);
        details.push(person[keys_details[k]]);  
        final.push(`${keys_details[k]} = ${details[k]} `);   
    }

    return(
        <div>
            <div className="p-3">This is person {id} from the database.</div>
            <div className="p-3">
                <div>Here are the following details about the person:</div>
                <div className="text-center">
                    {final.map(item => <p key={item}>{item}</p>)}
                </div>
            </div>
        </div>
    )
}

export default GetPersonInfo;