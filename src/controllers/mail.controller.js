import nodemailer from 'nodemailer'

//Mail que nos va a llegar a nosotros cuando alguien haga una compra
export const sendUsPurchaseEmail = async (req, res) => {
    const { info, cart } = req.body
    
    const productosHTML = cart.map(prod => `
            <ul key=${prod._id}>
                <h4>${prod.nombre}</h4>
                <li>Ha comprado una cantidad de ${prod.cantidad} a un precio total de $${prod.precio}</li>
            </ul>
            `
        )

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'aromass.plc@gmail.com',
            pass: 'smpg lbha mble vjja'
        }
    })
    
    const mailOptions = {
        from: info.email,
        to: 'aromass.plc@gmail.com',
        subject: `${info.nombre} ha realizado una compra`,
        html: `
            <div>
                <h3>${info.nombre} ha realizado una compra desde la direccion ${info.direccion}</h3>
                <h4>Resumen de compra:</h4>
                ${productosHTML.join('')}
                <p>- ${info.nombre} quiere continuar la compra por ${info.decision}</p>
                <p>- Telefono de ${info.nombre}: ${info.telefono}</p>
                <h5>Total a pagar: $${info.total}</h5>
            </div>
        `
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ error: "Algo salio mal con el envio de mail" })
        console.log(info)
        res.json(info)
    })
} 

//Mail que le llega a la persona que hace la compra
export const sendThemPurchaseEmail = async (req,res) => {
    const info = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'aromass.plc@gmail.com',
            pass: 'smpg lbha mble vjja'
        }
    })

    const mailOptions = {
        from: 'aromass.plc@gmail.com',
        to: info.email,
        subject: `Hola ${info.nombre}!`,
        html: `
            <div>
                <h3>Muchas gracias por realizar una compra en Aromas PLC!</h3>
                <p>Alguien de nuestro equipo se comunicara en la brevedad via ${info.decision} con usted.</p>
                <h5>El total a pagar de su compra es: $${info.total}</h5>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ error: "Algo salio mal con el envio de mail" })
        console.log(info)
        res.json(info)
    })
}

//Mail que nos llega cuando alguien hace una consulta
export const sendUsQuestionEmail = async (req, res) => {
    const info = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'aromass.plc@gmail.com',
            pass: 'smpg lbha mble vjja'
        }
    })

    const mailOptions = {
        from: info.email,
        to: 'aromass.plc@gmail.com',
        subject: `Nuevo mensaje recibido de ${info.email}`,
        html: `
            <div>
                <h2>Hola Aromas PLC!</h2>
                <p>Nuevo mensaje recibido de ${info.nombre}.</p>
                <h4>Mensaje:</h4>
                <ul>
                    <li>${info.mensaje}.</li>
                </ul>
                <p>Saludos,</p>
                <p>${info.nombre}</p>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ error: "Algo salio mal con el envio de mail" })
        console.log(info)
        res.json(info)
    })

}

//Mail que le llega a la persona cuando hace una consulta
export const sendThemQuestionEmail = async (req, res) => {
    const info = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'aromass.plc@gmail.com',
            pass: 'smpg lbha mble vjja'
        }
    })

    const mailOptions = {
        from: 'aromass.plc@gmail.com',
        to: info.email,
        subject: `Mensaje de consulta en Aromas PLC`,
        html: `
            <div>
                <h2>Hola ${info.nombre}!</h2>
                <p>Nos escribiste tu consulta en nuestra pagina web, en la brevedad te contestará alguien de nuestro equipo por este medio</p>
                <p>Saludos,</p>
                <p>Aromas PLC</p>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ error: "Algo salio mal con el envio de mail" })
        console.log(info)
        res.json(info)
    })

}