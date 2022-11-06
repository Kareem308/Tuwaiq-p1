import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Create() {
    // const Nav = useNavigate()
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    let url = "https://6362424c7521369cd068e030.mockapi.io/project"

    const postData = () => {
        axios.post(url, {
            Fname,
            Lname
        }).then(res => {
            console.log(res);
        })
    }



    return (
        <div className='form'>
            <div>
                <div>

                    <input placeholder='Enter your first name here' onChange={e => { setFname(e.target.value) }}></input>
                </div>
                <div>

                    <input placeholder='Enter your Last name here' onChange={e => { setLname(e.target.value) }}></input>
                </div>
                <center>
                    <button onClick={postData}>Login</button>
                    <div>
                        <Link to="/Show">Click here to show data</Link>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Create