// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    // const cardapio = '[--- CARDÁPIO DO DIA ---]:'+'\n'+
    // '----------------------'+'\n'+
    // '1 - BATATA FRITA'+'\n'+
    // '2 - STROGONOFF'+'\n'+
    // '3 - PIRÃO';
    // let toUser;
    const assistente = "Olá, sou o assistente virtual da BS";

    client.onMessage((message) => {
        if (message.body != null && message.body != 2 && message.isGroupMsg === false) {
            client
                .sendText(message.from, assistente)
                .then((result) => {
                    toUser = result.to.remote._serialized;
                    console.log('Result: ',  result.to.remote.user); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body === '2' && message.isGroupMsg === false) {
            client
                .sendImage(
                    toUser,
                    'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG',
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body === '1' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Você escolheu batata frita')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}