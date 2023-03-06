Pre-req:
1. Register a bot in azure(usual steps)
2. Store the credentials in .env file

Files used:
1. nodejs/server/index.js
2. nodejs/server/bot/proactiveBot.js

Steps:

1. Do `npm install` and `npm start` in nodejs folder
2. Say "hi" or "hello" in the Channel where bot is added
3. The conversation details gets registered into a dictonary(passed to the bot initialization) as the /api/messages is hit whenever a message is sent in a channel
4. Run the `curl http://localhost:3978/api/notify` command in terminal to notify the bot after some event has happened for eg. after a api call or after some time period.
5. The bot sends retreives the conversation id from the dictonary (created in step 3) and sends a proactive message to that conversation.
