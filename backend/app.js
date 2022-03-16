console.log("hello!!");
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/books',router)

mongoose.connect(
"mongodb+srv://admin:ey9YDGxNN3atgZgZ@cluster0.y7u4x.mongodb.net/Book-Store?retryWrites=true&w=majority"
).then(()=>console.log("Connected To Database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=> console.log(err));
// ey9YDGxNN3atgZgZ