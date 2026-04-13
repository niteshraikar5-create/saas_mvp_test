import express from "express";
import cors from 'cors';
import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const app = express();
const port  = 5555;
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

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/api/users', (req,res) => {
    res.json({ message: "Hello from backend" });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

