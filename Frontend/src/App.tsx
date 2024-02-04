import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "../Routes/Users";
import CreateUsers from "../Routes/CreateUsers";
import UpdateUsers from "../Routes/UpdateUsers";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/create/" element={<CreateUsers />}></Route>
            <Route path="/update/:id" element={<UpdateUsers />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
