const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.BOT_TOKEN);

client.once("ready", () => {
  console.log("bot on and ready");
});

client.on("messageReactionAdd", async (reaction, user) => {
  console.log("On message reaction add listener:");
  if (reaction.message.partial) {
    console.log("fetching partial message");
    await reaction.message.fetch();
  }
  if (reaction.partial) {
    console.log("fetching partial reaction");
    await reaction.fetch();
  }
  if (user.partial) {
    console.log("fetching partial user");
    await user.fetch();
  }
  if (user.bot) return;

  if (reaction.message.id === process.env.WELCOME_MESSAGE_ID) {
    console.log("a user reacted to the welcome message");

    // We know only founder role users are able to see the founders channel and react to the message, so no validation is needed
    // DB logic goes here

    // We respond with a DM to the user
    const message = await user.send(
      `Congrats, you reacted to our welcome message! Some copy goes here, and a link to register probably too`
    );
  } else {
    console.log(
      "a user reacted to a non welcome message with: " + reaction.emoji
    );
  }
});

client.on("guildMemberAdd", (member) => {
  console.log(
    `member ${member.user.username} with ID ${member.user.id} joined the guild`
  );
});

client.login(process.env.BOT_TOKEN);
