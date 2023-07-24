import express from "express";
import cors from "cors"

const app = express();
app.use(cors());

app.get("/getAllData", (req, res) =>{
    res.send("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.")
})

app.listen(5000, ()=> console.log("Listen at port 5000"))
