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
    const cardapio = '[--- CARDÁPIO DO DIA ---]:'+'\n'+
    '----------------------'+'\n'+
    '1 - BATATA FRITA'+'\n'+
    '2 - STROGONOFF'+'\n'+
    '3 - PIRÃO';

    client.onMessage((message) => {
        if (message.body === 'Cardápio' && message.isGroupMsg === false) {
            client
                .sendText(message.from, cardapio)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body === '2' && message.isGroupMsg === false) {
            client
                .sendImage(
                    '557192266760@c.us',
                    'https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both',
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