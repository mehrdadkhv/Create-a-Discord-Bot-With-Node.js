require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`);
});

clinet.on("message", (message) => {});

client.login(process.env.DISCORDJS_BOT_TOKEN);
