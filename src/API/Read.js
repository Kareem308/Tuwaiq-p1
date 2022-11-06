import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";


function Read() {
    const [APIData, setAPIData] = useState([]);

    let url ="https://6362426266f75177ea2a9be0.mockapi.io/ToDo"


    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    //Delete

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`https://6362426266f75177ea2a9be0.mockapi.io/ToDo/${id}`).then(res => {
            console.log(res);
            setAPIData(APIData.filter(del => {
                return del.id != id
            }))
        })
    };

    return (
        <div>
            {APIData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>FName: {data.fName}</p>
                        <p>LName: {data.lName}</p>
                        <button onClick={() => { onDelete(data.id) }}>Delete</button>

                        <Link to="/Update">
                            <button onClick={() => localStorage.setItem("id", data.id)}>Update</button>
                        </Link>
                        
                        <Link to="/Create">
                            <button onClick={() => localStorage.setItem("id", data.id)}>LogIn Page</button>
                        </Link>

                    </div>
                    
                )
                
            })}
            

        </div>
          
    )
}


export default Read;