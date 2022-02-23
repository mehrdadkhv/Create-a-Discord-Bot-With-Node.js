require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on("messageCreate", (message) => {
  console.log(`[${message.author.tag}] : ${message.content}`);
  if (message.content === "hello") {
    message.reply("hello mehrdad");
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
