import React, { useState } from "react";
import "../Styling/CreateUsers.Styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateUsers: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ id: "", name: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/user`, newUser)
      .then((res) => {
        toast.success("User Added Successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add user", { position: "top-right" });
      });
  };

  const handleIdChange = (e: { target: { value: number } }) => {
    // Ensure that the value is converted to a number
    const id = parseInt(e.target.value);
    setNewUser({ ...newUser, id });
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>

        <div className="">
          <label htmlFor="">ID</label>
          <input
            type="number"
            min="1"
            placeholder="Enter ID"
            className="form-control"
            value={newUser.id}
            onChange={handleIdChange}
          />
        </div>
        <div className="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUsers;
