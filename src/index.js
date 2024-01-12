import express from 'express'
import prodRoutes from './routes/prod.routes.js'
import cors from 'cors'
import { connectDb } from './db.js'
import { sendUsEmail } from './controllers/mail.controller.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/send-us-email', sendUsEmail)

app.use('/api', prodRoutes)

connectDb()
app.listen(4000) 
console.log('Server listening on port http://localhost:4000')