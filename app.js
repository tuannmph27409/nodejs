import express from "express";

import routesUser from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());
app.use("/api", routesUser);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port : ${process.env.PORT}`  );
})
