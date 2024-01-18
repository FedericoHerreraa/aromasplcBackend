import mongoose from 'mongoose';

const VelaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }
})

export default mongoose.model('velas', VelaSchema)