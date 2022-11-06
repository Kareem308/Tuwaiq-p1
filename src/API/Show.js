import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Show() {
  const [APIData, setAPIData] = useState([]);

  let url = "https://6362424c7521369cd068e030.mockapi.io/project"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setAPIData(res.data);
    })
  }, [])

  const onDelete = (id) => {
    console.log(id);
    axios.delete(`https://6362424c7521369cd068e030.mockapi.io/project/${id}`).then(res => {
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
            <p>First Name : {data.Fname}</p>
            <p>Last Name : {data.Lname}</p>
            <div>
              <button onClick={() => { onDelete(data.id) }}>Delete</button>
            </div>
            <Link to="/Update">
              <button onClick={() => localStorage.setItem("id", data.id)}>Update</button></Link>


          </div>
        )
      })}

    </div>
  )
}

export default Show


 {APIData.map((e) => (
          <div id="main">
            <p >First Name:{e.Fname} </p>
            <p>Last Name:{e.Lname}</p>
          </div>
        ))}