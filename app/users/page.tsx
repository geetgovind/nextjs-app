import React from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
    /**
     * adding the lines after the api for cache
     * ,{cache:'no-store'} //to store no cache
     * ,{next:{revalidate:10}} // to refresh every 10sec in background
     * */
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Users
      </h1>
      <p className="mb-4  leading-none tracking-tight text-gray-700 md:text-2xl lg:text-4xl ">
        {new Date().toLocaleTimeString()}
      </p>
      <table className="table table-zebra text-black">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>User Email ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
