client.initialize();

var nome = nome_cliente;

client.on('message', message => {
	if(message.body == 'Olá') {
		message.reply( 'Você está conversando com WhatsApp SAC da Tork Solda! \nEste canal é exclusivo para atendimento técnico de manutenção em fábrica. \n\n*Para outros assuntos entre em contato telefônico com o SAC 0800 601 9072*');
		client.sendMessage(message.from, 'Para iniciar seu atendimento me informe por favor o seu nome*');
	}else if(message.body != 'Olá') {
		message.reply( 'Você está conversando com WhatsApp SAC da Tork Solda! \nEste canal é exclusivo para atendimento técnico de manutenção em fábrica. \n\n*Para outros assuntos entre em contato telefônico com o SAC 0800 601 9072*');
		client.sendMessage(message.from, 'Para iniciar seu atendimento me informe por favor o seu nome*');
	}

	if(message.body != null && message.body != Olá && nome===nome_cliente){
		nome = message.body;
		message.reply( 'Olá' +nome, '!');
		message.reply( 'Qual o seu perfil de contato? \n*1- Consumidor final* \n*2- Lojista revendedor* \n*3- Unidade autorizada');
	}

	if(message.body == '1','1- Consumidor final','Consumidor final','Consumidor') {
		message.reply('Ok, vou precisar que me passe seu *CPF* para continuar com o atendimento!');
	}if(message.body == '2','2- Lojista revendedor','Lojista revendedor','Logista','revendedor') {
		message.reply('Ok, vou precisar que me passe sua *Razão social* e *CNPJ* da sua empresa para continuar com o atendimento!');
	}if(message.body == '3','3- Unidade autorizada','Unidade autorizada','Autorizada') {
		message.reply('Ok, vou precisar que me passe sua *Razão social* e *CNPJ* da sua empresa para continuar com o atendimento!');
	}else if(message.body != '1','1- Consumidor final','Consumidor final','Consumidor','2','2- Lojista revendedor','Lojista revendedor','Logista','revendedor','3','3- Unidade autorizada','Unidade autorizada','Autorizada') {
		message.reply('Desculpe, não entendi sua mensagem \nPode repetir por favor');
	}

	if(message.body == 'Razão CPF') {
		message.reply('Obrigado!');
		message.reply('Me informe seu e-mail para contato');
	}else if(message.body != 'Razão CPF') {
		message.reply('Obrigado!');
		message.reply('Me informe seu e-mail para contato');
	}

	if(message.body == 'email') { 
		message.reply('Muito obrigado pelas informações!');
		message.reply('Em que posso ajudar? \n*1- Compra de equpamentos* \n*2- Posto autorizado Tork Solda* \n*3- Suporte técnico* \n*3- OUTROS*');
	}else if(message.body != 'email') { 
		message.reply('Muito obrigado pelas informações!');
		message.reply('Em que posso ajudar? \n*1- Compra de equpamentos* \n*2- Posto autorizado Tork Solda* \n*3- Suporte técnico* \n*3- OUTROS*');
	}

	if(message.body == '1','1- Compra de equipamentos','Compra') {
		message.reply('Agradecemos o interesse!');
		message.reply('A venda de nossos equipamentos são realizadas diretamente em nossa loja oficial pelo Mercado Livre ou através da TORK STORE em nosso site');
		message.reply('*TORK STORE:* https://www.torkstore.com.br/');
		message.reply('*Loja oficial Mercado Livre:* https://loja.mercadolivre.com.br/super-tork');
		message.reply('A *TORK SOLDA* agradece seu contato!');
	}if(message.body == '2','2- Posto autorizado Tork Solda','Posto autorizado Tork Solda','Posto','Autorizada') {
		message.reply('Agradecemos as informações!');
		message.reply('Seu atendimento será direcionado a nossa equipe de acessoria tecnica!');
		message.reply('*Aguarde um instante!*');
	}if(message.body == '3','3- Suporte técnico','Suporte técnico','Suporte','Técnico') {
		message.reply('Agradecemos as informações!');
		message.reply('Seu atendimento será direcionado a nossa equipe de acessoria tecnica!');
		message.reply('*Aguarde um instante!*');
	}if(message.body == '4','4- OUTROS','OUTROS') {
		message.reply('Agradecemos as informações!');
		message.reply('Pedimos encarecidamente que descreva detalhadamente qual a sua nescessidade, para que possamos compreender melhor o assunto do chamado');
	}

});