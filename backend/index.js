import express from 'express'
import cors from 'cors'
import user from './routes/user.js'

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api',user)

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`the database is listining at ${PORT}`)
})
