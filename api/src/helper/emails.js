const nodemailer = require("nodemailer");


//Lo exporto al controller de registro. 
//Se utiliza antes de enviar la respuesta, una vez que el usuario se alamcena en la BD
/*
ENVIAR EL EMAIL DE CONFIRMACIÓN
para que tome todos los datos de una sola vez!!


*/

const emailRegister = async (data) => {
  const { name, lastName, status, mail, pass, avatar, birthday, token } = data;

  //integrando Nodemailer
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //credenciales de acceso, para que no esten visibles debemos colocarlas en variables de entorno
    port: 2525,
    auth: {
      user: "69c6010cf1f72c",
      pass: "f40f69f5780d19",
    },
  });
  //INFORMACION DEL EMAIL
  
  //sendMail() => envia el email una vez que identifica las credenciales
  const info = await transport.sendMail({
    from: '"upTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: mail,

    //el asunto visible
    subject: "upTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en upTask",
    html: `<p>Hola ${name} comprueba tu cuenta en upTask</p>
  <p>Solo debes comprobar tu cuenta en el siguiente enlace:</p>

  <a href="${process.env.FRONTEND_URL}/confirm/${token}" >Comprobar cuenta/a>

  <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
  
  `,
  });
}

module.exports = emailRegister;