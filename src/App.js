import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]); // State to store the users

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch('https://randomuser.me/api/?results=10');
  //       const data = await response.json();
        
  //       setUsers(data.results); // Assuming the API response has 'results'
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };
  
  //   fetchUsers(); // Fetch users when the component mounts
  // }, []); // Empty dependency array ensures this effect runs once on mount

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then((response)=> response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.error('Error while fetching',error))
  },[])
  return (
    <div>
      <h1>Hello Vikas!</h1>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}
