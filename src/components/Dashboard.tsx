import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const {user, logout } = useAuth();
  
  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.name}</h1>
        <button onClick={logout}>Logout</button>
      </header>
    </div>
  );
};

export default Dashboard;