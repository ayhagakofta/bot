const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("645343939632824341")
setInterval(function() {
channel.send(`ihihihihihiihihiihihihihi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);