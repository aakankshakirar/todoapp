import React, { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";
export default function ExampleUseEffect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const fetchData = async () => {
    const response = await fetch(URL);

    if (!response.ok) {
      console.log("Inside called");
      setLoading(false);
      setIsError(true);
      return;
    }
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("called");
    fetchData();
  }, []);

  if (loading) {
    return "Loading....";
  }

  if (error) {
    return "Something went wrong please try after some time";
  }

  return (
    <div>
      <h1>Use effect example</h1>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}
