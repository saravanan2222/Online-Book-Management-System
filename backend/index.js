import express from "express";
import {PORT, MONGODB_URI} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";
 
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
    console.log(request);
    return res.status(234).send('Welcome to Book Store');
})

app.use('/books',booksRoute);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('App connected');
        app.listen(PORT ,() => {
            console.log(`App is running at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error');
    })
