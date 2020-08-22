import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input} from "semantic-ui-react";

//keys_details.push(Object.keys(info[k]));
//details.push(info[id][keys_details[k]]);

const Person = () => {
    
    const [person, setPerson] = useState({});
    const keys_details = []
    const details = [];
    const final = [];
    const [id, setId] = useState(0);

    const fetch_person = useCallback(async () => {
        await fetch(`/reveal/${id}`)
        .then(response => response.json())
        .then(data => {setPerson(data.Person_Information)})
    }, [id]);

    useEffect(()=>{
        fetch_person();
    }, [fetch_person]);


    for(let k=0; k<Object.keys(person).length; k++){
        keys_details.push(Object.keys(person)[k]);
        details.push(person[keys_details[k]]);  
        final.push(`${keys_details[k]} = ${details[k]} `);   
    }

    return(
        <div className="text-center">
            <h1 className="text-bold bg-pink-200">Welcome to the Person Information Page</h1>
            <div className="p-3 bg-pink-300">
                Please enter the number of the person whose details you would like to see.
                (The number of people ranges from 0-214)
            </div>
            <Form>
                <Form.Field>
                    <Input
                        placeholder="person id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    >
                    </Input>
                </Form.Field>
                
            </Form>
            <div className="p-3">This is person {id} from the database.</div>
            <div className="p-3">
                <div>Here are the following details about the person:</div>
                <div>
                    {final.map(item => <p key={item}>{item}</p>)}
                </div>
            </div>
        </div>
        
    )
}

export default Person;