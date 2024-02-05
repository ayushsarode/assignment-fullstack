import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

interface UserData {
  id?: number;
  name?: string;
}

const UpdateUsers: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<UserData>({});
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/user/${parseInt(id)}`, data)
      .then((res) => {
        toast("User Updated Successfully", {
          position: "top-right",
          className: "toast-message",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
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
              value={data.id || ""}
              onChange={(e) =>
                setData({ ...data, id: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={data.name || ""}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <button className="submit-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
