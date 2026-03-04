import express from "express";
import cors from 'cors';
const app = express();
const port  = 5555;
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
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

