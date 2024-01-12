import Prod from '../schemas/prod.schema.js'

export const getProducts = async (req, res) => {
    try {
        const response = await Prod.find({})
        res.json(response)
    } catch (error) {
        res.status(404).json({ error: "No se pudieron encontrar las tareas" })
    }
}

export const getProd = async (req, res) => {
    try {
        const response = await Prod.findById(req.params.id)
        console.log(response)
        res.json(response)
    } catch (error) {
        res.status(404).json({ error: "No se encontro la tarea" })
    }
}

