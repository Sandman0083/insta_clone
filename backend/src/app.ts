import express from 'express';
import http from "http"
import indexRouter from "./routes/index"
import morgan from "morgan"

const app = express();
const port = 3001;

app.use("/", indexRouter)
app.use(morgan("dev"))
http.createServer(app).listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
  
})
