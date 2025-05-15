
const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://http://localhost:5173/"],
    credentials: true,
}));


//routes
const bookRoutes = require("./src/books/book.route");

app.use("/api/books", bookRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("Books Server is running!");
    })
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
