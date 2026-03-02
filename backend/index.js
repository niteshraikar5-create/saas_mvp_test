import express from "express";
import cors from 'cors';
const app = express();
const port  = 5555;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req,res) => {
    res.send('Hello World!');
});

app.get('/api/users', (req,res) => {
    res.json({ message: "Hello from backend" });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

