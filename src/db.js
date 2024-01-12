import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const url = process.env.MONGODB_URI

export const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log(`Se conecto correctamente con la db`)
    } catch (error) {
        console.log('Fallo la conexion con la base de datos')
    }
}
