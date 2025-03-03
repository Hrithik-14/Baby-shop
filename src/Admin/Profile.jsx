import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:4001/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, [userId]);

  if (!user) {
    return <div>No user selected.</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <h3>Orders</h3>
      {user.orders && user.orders.length > 0 ? (
        <ul>
          {user.orders.map((order) => (
            <li key={order.order_id}>
              {order.product} - ${order.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Profile;

