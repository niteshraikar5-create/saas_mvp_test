import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
import bcrypt from "bcrypt";
import * as z from "zod";
const saltRounds = 10;
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const app = express();
const port = 5555;
/* await prisma.user.create({
    data: {
    email: "test@gmail.com",
    username: "john123",
    password: "hashed_password_here"
  }
})

// READ
await prisma.user.findMany()
await prisma.user.findUnique({ where: { email:'test@gmail.com' } })

// UPDATE
await prisma.user.update({
  where: { id:1 },
  data: { active: false }
})

// DELETE
try {
  await prisma.user.delete({ where: { id: 2 } })
} catch (e) {
  console.log("User not found")
}
let users = await prisma.user.findMany();
console.log('users',users);
*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async (req, res) => {
  console.log("req.body", req.body);
  const password = req.body.password;
  const hashPass = await bcrypt.hash(password, saltRounds);
  let email = req.body.username;
  const records = await prisma.user.findMany({
    where: { email: email, password: hashPass },
  });
  if (records.length == 0) {
    res.json({ status: "0", message: "Invalid username or password!" });
  } else {
    if (records.length > 1) {
      res.json({ status: "0", message: "Duplicate Records exist!" });
    } else {
      res.json({
        status: "1",
        message: "Successfully Logged In!",
        username: email,
      });
    }
  }
});

app.post("/register", async (req, res) => {
  console.log("req.body", req.body);
  const password = req.body.password;
  const hashPass = await bcrypt.hash(password, saltRounds);
  let email = req.body.username;
  const records = await prisma.user.findMany({
    where: { email: email, password: hashPass },
  });
  if (records.length == 0) {
    res.json({ status: "0", message: "Invalid username or password!" });
  } else {
    if (records.length > 1) {
      res.json({ status: "0", message: "Duplicate Records exist!" });
    } else {
      res.json({
        status: "1",
        message: "Successfully Logged In!",
        username: email,
      });
    }
  }
});


app.get("/api/users", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
