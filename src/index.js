import express from 'express'
import prodRoutes from './routes/prod.routes.js'
import mailRouter from './routes/mail.routes.js'
import velasRoutes from './routes/velas.routes.js'
import cors from 'cors'
import { connectDb } from './db.js'

const app = express()
app.use(cors({
    origin: 'https://aromasplc.vercel.app',
    credentials: true
}))
app.use(express.json())

app.use('/api', mailRouter)

app.use('/api', prodRoutes)

app.use('/api', velasRoutes)

//end point para que el servidor no se duerma
app.use('/wakeUp', (req, res) => {
    console.log(res)
    res.json('hi')
})

//conexion con la base de datos
connectDb()
app.listen(4000) 
console.log('Server listening on port http://localhost:4000')