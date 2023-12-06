import { Message, PartialMessage } from "discord.js-self"

export const userConfig = [
	{
		name: 'CTB',
		userId: '973428788983631922',
		webhookURL: 'https://discord.com/api/webhooks/1181794180293476432/PrIQHxo-ipkKOanglJXfqVApJH7jLPv7jTmvrP5oWFiocFribVf6L0QrZSZzuerUMIBS',
		filter: ((msg: Message | PartialMessage) => {
			return msg.content?.includes('@everyone') || msg.content?.includes('@here') || msg.content?.includes('PLAY') || msg.channel.id == '1150640929712132116';
		})
	},
	{
		name: 'chilly',
		userId: '',
		webhookURL: 'https://discord.com/api/webhooks/1181819845067673621/PLq8PQl6uFrD8vhF-N3UPzQKTSzZS3z1wDItb1arLe9rQPDHe7h86f8Pd280AHlsaOj9',
		filter: ((msg: Message | PartialMessage) => {
			return true;
		})
	},
	{
		name: 'ceej',
		userId: '211962970723450880',
		webhookURL: 'https://discord.com/api/webhooks/1181819998444998656/lRjs-4U6vhXmFL1UiS9S047hGb0gZ0pGzfSlwSxqub70ZFDhEAm71HJgZnqdpsxoY6v4',
		filter: ((msg: Message | PartialMessage) => {
			return msg.content?.includes('@everyone') || msg.content?.includes('@here') || msg.content?.includes('PLAY') || msg.channel.id == '1169666205020344330';
		})
	},
	{
		name: 'Professor Smash',
		userId: '744998407789084783',
		webhookURL: 'https://discord.com/api/webhooks/1181820167001473136/p7LgijD9-yegNcpEemBE4x50S2P7myJmUWUj6reMt-BgKK-o_ikf42l5zQsF9sirAUUX',
		filter: ((msg: Message | PartialMessage) => {
			return msg.content?.includes('@everyone') || msg.content?.includes('@here') || msg.content?.includes('PLAY') || msg.channel.id == '1161529472554635274';
		})
	},
	{
		name: 'Markus Markets',
		userId: '1079052627456819272',
		webhookURL: 'https://discord.com/api/webhooks/1181820268604293130/lnSDvNvwbVZYpa86UizIC6N7kIFcy1Pl2NwnL6scB15KHeyPYHp-wfsIl0nvkfF7lGJj',
		filter: ((msg: Message | PartialMessage) => {
			return msg.content?.includes('@everyone') || msg.content?.includes('@here') || msg.content?.includes('PLAY') || msg.channel.id == '1150641574145970176';
		})
	},
	{
		name: 'Butcher Em',
		userId: '1103699961155166288',
		webhookURL: 'https://discord.com/api/webhooks/1181820351441809448/MLJ9tf_GNkbAoiAGphYojiI1c-13JbsUx6GVAo9nrianvSjfx-annawVooCRV6vnmdJj',
		filter: ((msg: Message | PartialMessage) => {
			return msg.content?.includes('@everyone') || msg.content?.includes('@here') || msg.content?.includes('PLAY') || msg.channel.id == '1162416018786877612';
		})
	},
	{
		name: 'Data Sheets',
		userId: '494998982997835795',
		webookURL: 'https://discord.com/api/webhooks/1182052277868044328/KVfLlUCIy1kvatHEKuieoLZf7Xg5zSEqIK3KhdlGFy8MQ5GWoUqcAswMNTjqnmisR0f6',
		filter: ((msg: Message | PartialMessage) => {
			return ['1148739942143496232', '1148739942143496232', '1143881697860014241', '1161340126429978755'].includes(msg.channel.id);
		})
	},
]

const servers = [
	'973430340821594152'
]