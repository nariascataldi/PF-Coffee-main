import ChatBot from "react-simple-chatbot";
import style from "./chatBot.module.css";
import { ThemeProvider } from "styled-components";

export default function Chat() {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#e1818b",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#DD6873",
    botFontColor: "#fff",
    userBubbleColor: "#e1818b",
    userFontColor: "#fff",
    height: "200px",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        className={style.container}
        steps={[
          {
            id: '"1',
            message: "Hola! como te llamas?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            validator: (value) => {
              if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                return true;
              } else {
                return "Por favor un nombre válido, con mayúscula";
              }
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Buenos dias {previousValue}, en que te puedo ayudar?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: 1, label: "Ofertas del fin de semana", trigger: "6" },
              {
                value: 2,
                label: "Tenes alguna recomendación para desayunar?",
                trigger: "5",
              },
              {
                value: 3,
                label: "Tenes alguna recomendación para almorzar?",
                trigger: "8",
              },
              {
                value: 4,
                label: "Quiero el whatsapp de un asistente",
                trigger: "7",
              },
            ],
          },
          {
            id: "5",
            message:
              "Mi recomendación es empezar el dia con un Cappuccino y unas Crispy Donuts",
            trigger: "4",
          },
          {
            id: "6",
            message:
              "Este fin de semana tenemos descuentos en algunos productos de la categoría coffees y cakes. Subscribete para recibir mas información por correo",
            trigger: "4",
          },
          {
            id: "7",
            message: "El Whatsapp de nuestro asistente es +5492615978542",
            trigger: "4",
          },
          {
            id: "8",
            message:
              "Mi recomendación para el medio día es una Cuarto de Libra acompañada de una Fanta Naranja",
            trigger: "4",
          },
        ]}
      />
    </ThemeProvider>
  );
}
