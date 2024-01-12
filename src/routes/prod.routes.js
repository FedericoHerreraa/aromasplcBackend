import { Router } from "express";
import { 
    getProducts, 
    getProd
} from "../controllers/prod.controller.js";

const prodRoutes = Router()

prodRoutes.get('/getProds', getProducts)

prodRoutes.get('/getProd/:id', getProd)

export default prodRoutes