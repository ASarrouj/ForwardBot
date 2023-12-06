import { Client, Guild, Message, PartialMessage } from 'discord.js-self';
import { loginToken, adminId } from './secureConstants.ign';
import { userConfig } from './config';

const client = new Client();

client.on('ready', async () => {
	await Promise.all(client.guilds.cache.map(async (guild: Guild) => {
		console.log(`Bot is listening on server ${guild.name}`);
	}));
});

client.on('message', async (msg: Message | PartialMessage) => {
	const user = userConfig.find(config => config.userId === msg.author?.id);
	if (user && user.filter(msg)) {
		try {
			await fetch(user.webhookURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					content: msg.content + ' ' + msg.attachments.array().map(att => att.url).join(' '),
					username: msg.author?.username,
					avatarURL: `https://cdn.discordapp.com/avatars/${msg.author?.id}/${msg.author?.avatar}.png?size=256`,
					embeds: msg.embeds?.[0] ? [msg.embeds[0]] : undefined
				}),
			});
		}
		catch (e) {
			client.users.fetch(adminId).then(user => {
				user.send(`Error with fetch ${e}`);
			});
		}
	}
});

client.login(loginToken);