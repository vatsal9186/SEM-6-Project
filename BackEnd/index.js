import express from 'express';
import { connectDB } from './Config/db.js';


const app = express();
const port = 5000;


connectDB();

app.get('/', (req, res) => {
    res.send('working');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})