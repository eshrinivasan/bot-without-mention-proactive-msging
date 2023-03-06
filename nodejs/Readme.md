Pre-req:
1. Register a bot in azure(usual steps)
2. Store the credentials in .env file

Files used:
nodejs/server/index.js
nodejs/server/bot/proactiveBot.js

Steps:

1. Do `npm install` and `npm start` in nodejs folder
2. Say "hi" or "hello" in the Channel where bot is added
3. The conversation details gets registered as /api/messages hit as soon as the message is sent
4. Run the `curl http://localhost:3978/api/notify` command in terminal to notify the bot after some event has happened for eg. after a api call or after some time period.
5. The bot sends a proactive message to the conversation id it already has registered in step 3 above.
