import axios from "axios";
import "../Styling/Users.Styles.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GirlSvg from "../assets/girl.png";
import toast from "react-hot-toast";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main">
      <div className="wrapper">
        <h1>
          Profile <span>Peeps</span>
        </h1>
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
              {users.map((users) => (
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td className="buttons">
                    <Link to={`/update/${users.id}`} className="edit-btn">
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleSubmit(users.id)}
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
  function handleSubmit(id) {
    const Conf = window.confirm("Do you want to delete the User");
    if (Conf) {
      axios
        .delete("http://localhost:3000/user/" + id)
        .then((res) => {
          toast.error("User has been Deleted", { position: "top-right" });
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }
};

export default Users;
