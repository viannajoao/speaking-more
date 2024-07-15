import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT 
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, ()=> console.log('listening on port '+PORT));

