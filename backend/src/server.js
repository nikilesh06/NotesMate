import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js"
import { rateLimiter } from "./middlewares/rateLimiter.js";

const app = express();
const PORT = process.env.PORT||3000;
const __dirname = path.resolve();

dotenv.config();

if(process.env.NODE_ENV !== "production"){
    app.use(cors({origin:"http://localhost:5173"}));

}
app.use(express.json());
app.use(rateLimiter);

app.use('/notes',notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get(/.*/, (req, res) => {
        res.sendFile(
        path.join(__dirname, "../frontend", "dist", "index.html")
        );
    });

}


app.get('/',(_,res)=>{
    res.send('hello');
});

//starting server and mongoDb
connectDB().then(()=>{
    app.listen(PORT,()=> console.log(`server is running `));
}).catch((error)=>{
    console.log(error);
})



