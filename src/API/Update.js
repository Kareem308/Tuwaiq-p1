import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function Update() {
    const navigate = useNavigate();
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [id, setId] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setFname(localStorage.getItem("firstName"));
        setLname(localStorage.getItem("lastName"));
    }, []);

    const updateData = () => {
        axios.put(`https://6362424c7521369cd068e030.mockapi.io/project/${id}`, {
            Fname,
            Lname,

        }).then(res => {
            console.log(res.id);
            navigate("/Show");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='form'>
            <div>
                <div>

                    <input placeholder='Update your first name' onChange={e => { setFname(e.target.value) }}></input>
                </div>
                <div>

                    <input placeholder='Update your Last name' onChange={e => { setLname(e.target.value) }}></input>
                </div>
                <center>
                    <button onClick={updateData}>Update !</button>
                </center>
            </div>
        </div>
    )
}

export default Update;