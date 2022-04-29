const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const dotenv = require("dotenv");

// Import env vars
dotenv.config();

// Get required IDs from env
const FOUNDER_CHANNEL_ID = process.env.FOUNDER_CHANNEL_ID;
const GUILD_ID = process.env.GUILD_ID;
const REACTION_EMOJI = "😎";

client.once("ready", async (client) => {
  console.log(
    `Bot setup started for Channel: ${FOUNDER_CHANNEL_ID} in Guild: ${GUILD_ID}`
  );

  // Fetch the channel to send the message to
  const channel = await client.channels.fetch(FOUNDER_CHANNEL_ID);

  // Send the message to the channel
  const botMessage = await channel.send(
    `Welcome to the HustleCo Founders channel! React with 😎 to get your invitation to the Collective!`
  );

  // React to the message so it's easier for users to react with the correct emoji
  botMessage.react(REACTION_EMOJI);
});

client.login(process.env.BOT_TOKEN);
