import express from 'express';
import { connectDB } from './Config/db.js';
import Userrouter from './Routes/User.routes.js';
import cors from 'cors';
import productRouter from './Routes/Product.route.js';
import OrderRouter from './Routes/Order.routes.js';
import FeedbackRouter from './Routes/Feedback.routes.js';
import Adminrouter from './Routes/Admin.routes.js';



const app = express();
const port = 5000;


connectDB();

app.use(cors({
    origin: '*', // Replace with your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


app.get('/', (req, res) => {
    res.send('working');
})

app.use(express.json());

app.use("/api/user", Userrouter);
app.use("/api/products", productRouter);
app.use("/api/order", OrderRouter);
app.use("/api", FeedbackRouter);
app.use("/api/admin", Adminrouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
