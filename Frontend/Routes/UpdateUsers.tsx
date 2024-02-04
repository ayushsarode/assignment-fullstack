import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUsers: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .put(`http://localhost:3000/user/` + id)
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="body">
      <div className="form-section">
        <form>
          <h2>Update User</h2>

          <div className="">
            <label htmlFor="">ID</label>
            <input
              type="number"
              min="1"
              placeholder="Enter ID"
              className="form-control"
              value={data.id}
            />
          </div>
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={data.name}
            />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
