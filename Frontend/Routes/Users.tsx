import axios from "axios";
import "../Styling/Users.Styles.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface User {
  id: number;
  name: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:3000/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <nav>
        <h1>
          Profile <span>Peeps</span>
        </h1>
      </nav>
      <div className="wrapper">
        <Link to="/create" className="Add-btn">
          Create +
        </Link>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td className="buttons">
                    <Link to={`/update/${user.id}`} className="edit-btn">
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="dlte-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  function handleDelete(id: number) {
    const Conf = window.confirm("Do you want to delete");
    if (Conf) {
      axios
        .delete(`http://localhost:3000/user/${id}`)
        .then(() => {
          toast.error("User has been Deleted", { position: "top-right" });
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }
};

export default Users;
