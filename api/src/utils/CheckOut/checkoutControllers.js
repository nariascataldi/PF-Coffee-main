const { ACCESS_TOKEN } = process.env;
//mercado pago
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const checkoutControllers = {};

checkoutControllers.pago = (req, res) => {

  //let id = req.params;
  let itemsCheckout = req.body
  console.log(itemsCheckout)
  let items2 = itemsCheckout.map( a => {
    return {
        title: a.title,
        picture_url: a.image,
        unit_price: a.price,
        quantity: a.quantity,
    }
  });
  //console.log(items2)
  let preference = {
    items:items2,
  
  
    back_urls: {
      success: "http://localhost:3000/checkout/congrats",
      failure: "http://localhost:3000/checkout/congrats",
      pending: "http://localhost:3000/checkout/congrats",
    },
    auto_return: "approved",
    // auto_return: "failure",
    // auto_return: "pending",
    
  }
  mercadopago.preferences
    .create(preference)
    .then(function (respuesta) {
      const redireccion = respuesta.body.init_point;
      res.send(redireccion);
    })
    .catch(function (error) {
      error;
    });

  }
module.exports = checkoutControllers