const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
require('dotenv').config();

const token = process.env.BOT_TOKEN; // Replace with your bot's token
const gifUrl = 'https://cdn.discordapp.com/attachments/1035457527976054804/1245623682215186482/image0.gif?ex=66596cf4&is=66581b74&hm=1a7edb418fb2bc1ec477097160d55739386e2bbf9500ad7251fc5e5b4b512a30&'; // Replace with the URL of your GIF

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return; // Ignore messages from bots

  const content = message.content.toLowerCase();

  if (content.includes('pump')) {
    message.channel.send(gifUrl);
  }

  if (content.startsWith('!changegif ')) {
    const args = message.content.split(' ');
    if (args.length > 1) {
      const newGifUrl = args[1];
      gifUrl = newGifUrl;
      message.channel.send(`GIF URL has been changed to: ${newGifUrl}`);
    } else {
      message.channel.send('Please provide a valid URL.');
    }
  }
});

client.login(token);
