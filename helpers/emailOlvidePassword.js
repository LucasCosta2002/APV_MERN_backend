import nodemailer from 'nodemailer'

const emailOlvidePassword = async (datos)=>{

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
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: `<p>Hola ${nombre}, solicitaste reestablecer tu contraseña.</p>
        <p>Sigue el siguiente enlace para reestablecer tu contraseña: 
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer contraseña</a></p>
        <p>Si vos no creaste la cuenta ignora este mensaje</p>`
      });

      console.log("mensaje enviado: %s", info.messageId)
}

export default emailOlvidePassword;