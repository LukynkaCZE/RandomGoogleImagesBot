const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.login(config.token);

client.on('message', async message => {
	if (message.content === '!omega') {
		try {
            await message.react('🇬');
			await message.react('👏🏿');
            await message.react('🇪');
			await message.react('👏🏾');
            await message.react('🇯');
            await message.react('👏🏽');
            console.log('Date.now()');
            message.channel.send('O 👏🏽 M 👏🏽 E 👏🏽 G 👏🏽 A   J 👏🏽 E   G 👏🏽 E 👏🏽 J')
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});

// :regional_indicator_a: :regional_indicator_n: :regional_indicator_o: 




client.on('message', async message => {
	if (message.content === 'ping') {
		try {
            message.channel.send('pong!');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});



client.on('ready', () => {
    client.user.setActivity("", {
        type: "WATCHING",
        url: "https://www.twitch.tv/lukynkacze"
      });
});



