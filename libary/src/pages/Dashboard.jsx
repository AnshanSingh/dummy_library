import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Welcome {user.name} 👋</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
