import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import "../Styling/CreateUsers.Styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateUsers: React.FC = (): React.ReactNode => {
  const [inputData, setInputData] = useState({ id: "", name: "" });
  const navigate = useNavigate();

  function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/user", inputData)
      .then((res) => {
        toast.success("User Added Successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="body">
      <div className="form-section">
        <form onSubmit={Submit}>
          <h2>Add User</h2>

          <div className="">
            <label htmlFor="">ID</label>
            <input
              type="number"
              min="1"
              placeholder="Enter ID"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, id: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
