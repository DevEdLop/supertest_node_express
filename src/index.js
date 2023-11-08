import express from 'express';
import indexRouter from './routes/index.routes.js'
import cors from 'cors'

const app = express();
const port = 4002;


// app.use(express.json())
app.use(cors())
app.use('/api', indexRouter)
app.listen(port, () => {
    console.log(`Mi app esta corriendo en el puerto [${port}]`)
})