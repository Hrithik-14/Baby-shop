import React, { useEffect, useState } from "react";
import axios from "axios";
import './Dashboard.css'

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get("http://localhost:4001/products");
        const usersResponse = await axios.get("http://localhost:4001/users");
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <section className="users-section">
        <h2>Users</h2>
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role || "Customer"}</p>
              <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>

              <h4>Orders:</h4>
              {user.orders && user.orders.length > 0 ? (
                <div>
                  {user.orders.map((order) => (
                    <div key={order.id} className="order-card">
                      <p>Product: {order.name}</p>
                      <p>Quantity: {order.quantity}</p>
                      <p>Status: {order.status}</p>
                      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No orders</p> 
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
