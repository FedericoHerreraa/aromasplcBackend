import { Router } from "express";
import { 
    getProducts, 
    createProd,
    getProd
} from "../controllers/prod.controller.js";

const prodRoutes = Router()

prodRoutes.get('/getProds', getProducts)

prodRoutes.get('/getProd/:id', getProd)

prodRoutes.post('/addProd', createProd)

export default prodRoutes