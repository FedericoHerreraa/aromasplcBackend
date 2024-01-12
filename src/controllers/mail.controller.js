import nodemailer from 'nodemailer'

//Mail que nos va a llegar a nosotros cuando alguien haga una compra
export const sendUsEmail = async (req, res) => {
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