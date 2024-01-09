const { functionsIn } = require("lodash");
const { Client } = require("whatsapp-web.js");

Client.initialize();

var nome = "xvx99*"

Client.on('message', async message => {
    const contact = await message.getContact();

    if(message.body !== null && message.body === 'Olá, tenho interesse em conhecer o ExcelWeb!') {
        message.reply('Olá, aqui é Jarvis, robo do Genios do Excel');
        Client.sendMessage(message.from, 'Antes da gente começar, me fala primeiro qual é o seu nome?');
    }
    else if (message.body !== null && message.body === 'Olá, tenho interesse em conhecer o ExcelWeb!' && nome === "xvx99*") {
        nome = message.body;
        console.log(nome)
        Client.sendMessage(message.from, 'Olá '+nome+' vou te mandar as opções da Pizzaria');
        Client.sendMessage(message.from, '1. Fazer Pedido \n2. Acompanhar pedido \n 3. Ver menu \n 4. Falar com um atendente');
    }

    else if(message.body !== null && message.body === "1") {
        Client.sendMessage(message.from, '1.1 Pizzas \n1.2 Bebidas \n1.3 Sobremesas \n00. Voltar para o menu inicial');
    }

    else if(message.body !== null && message.body === "1.1") {
        Client.sendMessage(message.from, '1.1.1 Frango \n1.1.2 Palmito \n1.1.3 Vegetariana \n00. Voltar para o menu inicial');
    }

    else if(message.body !== null && message.body === "1") {
        Client.sendMessage(message.from, '1. Fazer Pedido \n2. Acompanhar pedido \n 3. Ver menu \n 4. Falar com um atendente');
    }

    else if(message.body !== null && message.body === "4") {
        setTimeout(function() {
            message.reply(`@${contact.number}` + ' seu contato já foi encaminhado para um dos nossos atendentes');
            Client.sendMessage('5541123456789@c.br','Entrar em contaot com: https://wa.me/' + `${contact.number}`);
        }, 1000 + Math.floor(Math.random() * 1000));
    }
});