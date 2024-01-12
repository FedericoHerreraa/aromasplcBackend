import { Router } from "express";
import { 
    sendUsPurchaseEmail,
    sendThemPurchaseEmail,
    sendUsQuestionEmail,
    sendThemQuestionEmail 
} from "../controllers/mail.controller.js";

const mailRouter = Router()

//mails de la compra
mailRouter.post('/send-us-purchase-email', sendUsPurchaseEmail)
mailRouter.post('/send-them-purchase-email', sendThemPurchaseEmail)

//mails de las preguntas
mailRouter.post('/send-us-question-email', sendUsQuestionEmail)
mailRouter.post('/send-them-question-email', sendThemQuestionEmail)

export default mailRouter