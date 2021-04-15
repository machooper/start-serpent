const nodemailer = require('nodemailer')

export default (req, res) => {
    const {name, email, message} = req.body

    const transporter = nodemailer.createTransport({
        service: "iCloud",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSW
        },
    })

    const mailOption = {
        from: process.env.EMAIL,
        to: process.env.LMAIL,
        subject: `Contact form submitted by ${email}`,
        text: `
            ${name} wrote:
            ${message}
            
            Respond by clicking below:
            mailto:${email}
        `,
    }
    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("mail sent")
        }
    })

    console.log(name, email, message)
    res.send('success')
}
