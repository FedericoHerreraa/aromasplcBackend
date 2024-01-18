import { Router } from "express";
import { 
    getAll 
} from "../controllers/velas.controller.js";

const velasRoutes = Router();

velasRoutes.get('/getAll', getAll)

export default velasRoutes