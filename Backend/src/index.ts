import express from "express";

const app = express();
const port = 3000;
import { USERS, USER_TYPE } from "./users";
import cors from "cors";

app.use(express.json());

app.use(cors());

app.get("/users", (req, res) => {
  res.json(USERS.users);
});

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = USERS.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ id: user.id, name: user.name });
});

// app.post("/user", (req, res) => {
//   try {
//     const inputData = req.body;

//     const newUserId = Math.floor(Math.random() * 1000);

//     // Assign the new ID to the user data
//     const newUser = { ...inputData, id: newUserId };

//     USERS.users.push(newUser);

//     res.status(200).json(USERS);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/user", (req, res) => {
  try {
    // Extract the new user data from the request body
    const newUser = req.body;

    // Add the new user to the existing users
    USERS.users.push(newUser);

    // Respond with the updated list of users
    res.status(200).json(USERS);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/user/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userIndex = USERS.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    const updatedUserData = req.body;

    USERS.users[userIndex] = { ...USERS.users[userIndex], ...updatedUserData };

    res.status(200).json(USERS);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const userIndex = USERS.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    USERS.users.splice(userIndex, 1);

    res.status(200).json(USERS);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// stop here

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
