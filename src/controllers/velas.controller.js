import Velas from '../schemas/velas.schema.js'

export const getAll = async (req, res) => {
    try {
        const response = await Velas.find({})
        console.log(response)
        res.json(response)
    } catch (err) {
        res.status(500).json({ error: "No se pudieron obtener las velas" })
    }
}
