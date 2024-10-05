import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]); // Initialize state to store the users

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Await the fetch call to get the response
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json(); // Parse the response JSON
       // console.log(data);
        
        setUsers(data.results); // Assuming API response has 'results'
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers(); // Call the fetchUsers function on component mount
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div>
      <h1>Hello Vikas!</h1>
      <p>User List</p>
      <ul>
        {users.map((user, index) => (
          <li key={user.login.uuid}>{user.name.first} {user.name.last}</li> // Display first and last names
        ))}
      </ul>
    </div>
  );
}
