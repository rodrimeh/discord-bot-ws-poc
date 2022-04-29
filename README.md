# discord-bot-ws-poc

Node 16 is required for discord.js to work.

## How to run: 

- Create a `.env` file and fill the necessary env vars to run the bot setup. You can get the `GUILD_ID` and `FOUNDER_CHANNEL_ID` from your discord server, and the rest from the app configuration
- Run the bot setup with `node bot-setup.js`
- Get the ID from the message the bot sent and fill the required env var in `.env`
- Run the bot with `node main.js`
