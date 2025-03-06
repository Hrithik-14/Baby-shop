import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa'; 

function Profile() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4001/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 style={styles.sectionHeader}>Users</h2>
      {users.length > 0 ? (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <span>{user.name}</span>
              <Link to={`/profile/${user.id}`} style={styles.detailsButton}>
                <FaEye />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}


const styles = {
  sectionHeader: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  detailsButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
};

export default Profile;
