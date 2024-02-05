import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUsers: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3000/user/` + id, data).then((res) => {
      alert("data update successfully!");
      navigate("/");
    });
  }

  return (
    <div className="body">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>

          <div className="">
            <label htmlFor="">ID</label>
            <input
              type="number"
              min="1"
              placeholder="Enter ID"
              className="form-control"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <button className="submit-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
