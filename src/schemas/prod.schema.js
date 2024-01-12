import mongoose from 'mongoose'

const DifusorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

export default mongoose.model('prods', DifusorSchema)