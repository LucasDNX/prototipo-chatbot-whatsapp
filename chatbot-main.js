//Gerador QR Code
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('WhatsApp Conectado!');
});

//Inicio do Codigo
client.initialize();

var entrada = 'texto'
var nome = "Cliente"
var cpf_cnpj = "12345678910"
var email = "n@mail.com"
var digito1 = "digito1"
var digito2 = "digito2"

client.on('message', async message => {

	if (message.body !== null && entrada === 'texto') {
        entrada = message.body;
		client.sendMessage(message.from, 'Você está conversando com WhatsApp SAC da Tork Solda! \nEste canal é exclusivo para atendimento técnico de manutenção em fábrica. \n\n*Para outros assuntos entre em contato telefônico com o SAC 0800 601 9072*');
		client.sendMessage(message.from, 'Para iniciar seu atendimento me informe por favor o seu *nome*');
	} 

    else if (message.body !== null && nome === "Cliente" && message.body !== 'Olá') {
        nome = message.body;
        console.log('Nome: ' , nome)
        client.sendMessage(message.from, 'Olá ' +nome+ '!\nQual o seu perfil de contato?');
        client.sendMessage(message.from,  '*1- Consumidor final* \n*2- Lojista revendedor* \n*3- Unidade autorizada*');
    }

    //client.sendMessage(message.from, 'Desculpe, não entendi sua mensagem \nPode repetir por favor')
    else if(message.body !== null && message.body === '1' && digito1 === "digito1") {
        digito1 = message.body;
		client.sendMessage(message.from, 'Ok, vou precisar que digite o seu *CPF* ou o *CNPJ* de sua empresa para continuar com o atendimento!');
    }
    else if(message.body !== null && message.body === '2' && digito1 === "digito1") {
        digito1 = message.body;
		client.sendMessage(message.from, 'Ok, vou precisar que digite o seu *CPF* ou o *CNPJ* de sua empresa para continuar com o atendimento!');
	}
    else if(message.body !== null && message.body === '3' && digito1 === "digito1") {
        digito1 = message.body;
		client.sendMessage(message.from, 'Ok, vou precisar que digite o seu *CPF* ou o *CNPJ* de sua empresa para continuar com o atendimento!');
	}


    else if (message.body !== null && cpf_cnpj === "12345678910") {
        cpf_cnpj = message.body;
        console.log('CPF:' , cpf_cnpj)
		client.sendMessage(message.from, 'Obrigado \nMe informe seu e-mail para contato');
    }
    
    else if(message.body !== null && email === "n@mail.com") {
        email = message.body;
        console.log('E-mail: ' , email)
        client.sendMessage(message.from, 'Muito obrigado pelas informações!');
        client.sendMessage(message.from, 'Em que posso ajudar? \n*1- Compra de equpamentos* \n*2- Posto autorizado Tork Solda* \n*3- Suporte técnico* \n*4- OUTROS*');
    }

    else if (message.body !== null && message.body === '1' && digito2 === "digito2") {
        digito2 = message.body;
		client.sendMessage(message.from, 'Agradecemos o interesse!');
		client.sendMessage(message.from, 'A venda de nossos equipamentos são realizadas diretamente em nossa loja oficial pelo Mercado Livre ou através da TORK STORE em nosso site');
		client.sendMessage(message.from, '*TORK STORE:* https://www.torkstore.com.br/');
		client.sendMessage(message.from, '*Loja oficial Mercado Livre:* https://loja.mercadolivre.com.br/super-tork');
		client.sendMessage(message.from, 'A *TORK SOLDA* agradece seu contato!');
    }

    else if(message.body !== null && message.body === '2' && digito2 === "digito2") {
        digito2 = message.body;
		client.sendMessage(message.from, 'Agradecemos as informações!');
		client.sendMessage(message.from, 'Seu atendimento será direcionado a nossa equipe de acessoria tecnica!');
		client.sendMessage(message.from, '*Aguarde um instante!*');
	}

    else if(message.body !== null && message.body === '3' && digito2 === "digito2") {
        digito2 = message.body;
		client.sendMessage(message.from, 'Agradecemos as informações!');
		client.sendMessage(message.from, 'Seu atendimento será direcionado a nossa equipe de acessoria tecnica!');
		client.sendMessage(message.from, '*Aguarde um instante!*');
	}

    else if(message.body !== null && message.body === '4' && digito2 === "digito2") {
        digito2 = message.body;
		client.sendMessage(message.from, 'Agradecemos as informações!');
		client.sendMessage(message.from, 'Pedimos encarecidamente que descreva detalhadamente qual a sua nescessidade, para que possamos compreender melhor o assunto do chamado');
	}

});