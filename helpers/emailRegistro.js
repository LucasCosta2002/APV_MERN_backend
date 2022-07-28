import nodemailer from 'nodemailer'

const emailRegistro = async (datos)=>{

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      const { email, nombre, token} = datos;

    //Enviar email
      const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Confirma tu cuenta en APV",
        text: "Confirma tu cuenta en APV",
        html: `<p>Hola ${nombre}, confirma tu cuenta en APV.</p>
        <p>Tu cuenta ya está lista, solo tenes que confirmarla en el siguiente enlace: 
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>
        <p>Si vos no creaste la cuenta ignora este mensaje</p>`
      });

      console.log("mensaje enviado: %s", info.messageId)
}

export default emailRegistro;