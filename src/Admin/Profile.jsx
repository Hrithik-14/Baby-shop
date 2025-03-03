// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile({ userId }) {
//   const [users, setUsers] = useState(null);

//   // useEffect(() => {
//   //   if (userId) {
//   //     axios
//   //       .get(`http://localhost:4001/users/${userId}`)
//   //       .then((response) => setUser(response.data))
//   //       .catch((error) => console.error("Error fetching user details:", error));
//   //   }
//   // }, [userId]);

//   // if (!user) {
//   //   return <div>No user selected.</div>;
//   // }

//   useEffect(()=>{
//      async () => {
//       const response = await axios.get("http://localhost:4001/users");
//       setUsers(response.data);
//   };
//   })


//   return (
//     <div>
//       {/* <h2>User Details</h2>
//       <p>
//         <strong>Name:</strong> {user.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//       <h3>Orders</h3>
//       {user.orders && user.orders.length > 0 ? (
//         <ul>
//           {user.orders.map((order) => (
//             <li key={order.order_id}>
//               {order.product} - ${order.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div> */}
//     <h2 style={styles.sectionHeader}>Users</h2>
//                 <ul style={styles.list}>
//                     {users.map((user) => (
//                         <li key={user.id} style={styles.listItem}>
//                             <span>{user.name}</span>
//                             <button 
//                                 style={styles.detailsButton} 
//                                 onClick={() => alert(`User: ${user.name}\nOrder Details: Order #123 - 3 items`)}
//                             >
//                                 <FaEye />
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//   );
// }

// export default Profile;


// const styles = {
//   // main: {
//   //     padding: '20px',
//   //     fontFamily: 'Arial, sans-serif',
//   //     backgroundColor: '#f9f9f9',
//   //     borderRadius: '8px',
      
//   //     maxWidth: '800px',
//   //     marginTop: '300px',
//   //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   // },
//   // header: {
//   //     textAlign: 'center',
//   //     color: '#333',
//   //     marginBottom: '20px',
//   // },
//   sectionHeader: {
//       color: '#555',
//       borderBottom: '2px solid #ddd',
//       paddingBottom: '10px',
//       marginTop: '20px',
//   },
//   list: {
//       listStyle: 'none',
//       padding: '0',
//   },
//   listItem: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px',
//       margin: '10px 0',
//       backgroundColor: '#fff',
//       borderRadius: '4px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   // deleteButton: {
//   //     backgroundColor: '#ff4d4d',
//   //     color: '#fff',
//   //     border: 'none',
//   //     padding: '8px 12px',
//   //     borderRadius: '4px',
//   //     cursor: 'pointer',
//   //     fontSize: '14px',
//   // },
//   // detailsButton: {
//   //     backgroundColor: '#4CAF50',
//   //     color: '#fff',
//   //     border: 'none',
//   //     padding: '8px 12px',
//   //     borderRadius: '4px',
//   //     cursor: 'pointer',
//   //     fontSize: '14px',
//   // },
//   };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from 'react-icons/fa'; // Importing the eye icon

function Profile({ userId }) {
  const [users, setUsers] = useState([]); // Initialize as an empty array

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
              <button
                style={styles.detailsButton}
                onClick={() => alert(`User: ${user.name}\nOrder Details: Order #123 - 3 items`)}
              >
                <FaEye />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default Profile;

const styles = {
  sectionHeader: {
    color: '#555',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    marginTop: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  detailsButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
