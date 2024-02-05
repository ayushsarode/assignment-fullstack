import express from "express";

const app = express();
const port = 3000;

// write your code here
import { USERS, USER_TYPE } from "./users";
import cors from "cors";

app.use(express.json());

app.use(cors());

app.get("/users", (req, res) => {
  res.json(USERS.users);
});

app.get;

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = USERS.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ id: user.id, name: user.name });
});

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
    // Extract the user ID from the request parameters
    const userId = parseInt(req.params.id);

    // Find the index of the user with the specified ID
    const userIndex = USERS.users.findIndex((user) => user.id === userId);

    // Check if the user with the specified ID exists
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    // Extract the updated user data from the request body
    const updatedUserData = req.body;

    // Update the user with the new data
    USERS.users[userIndex] = { ...USERS.users[userIndex], ...updatedUserData };

    // Respond with the updated list of users
    res.status(200).json(USERS);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const userId = parseInt(req.params.id);

    // Find the index of the user with the specified ID
    const userIndex = USERS.users.findIndex((user) => user.id === userId);

    // Check if the user with the specified ID exists
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    // Remove the user from the array
    USERS.users.splice(userIndex, 1);

    // Respond with the updated list of users
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
