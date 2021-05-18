const discord = require("discord.js")
const client = new discord.Client()
const config = require("./config.json")
// on start
client.on("ready", async () => {
  console.log(`${client.user.tag} Is Looking For Badges!`)
})
// on member join
client.on("guildMemberAdd", async member => {
  try {
  let userflags = member.user.flags;
if (userflags.has('PARTNERED_SERVER_OWNER')) {
const badgerole = member.guild.roles.cache.get(config.roles.discordpartner)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('DISCORD_EMPLOYEE')) {
const badgerole = member.guild.roles.cache.get(config.roles.discordstaff)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('HYPESQUAD_EVENTS')) {
const badgerole = member.guild.roles.cache.get(config.roles.hypesquadevents)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('BUGHUNTER_LEVEL_1')) {
const badgerole = member.guild.roles.cache.get(config.roles.bughunterlevel1)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('HOUSE_BRAVERY')) {
const badgerole = member.guild.roles.cache.get(config.roles.hypesquadbravery)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('HOUSE_BRILLIANCE')) {
const badgerole = member.guild.roles.cache.get(config.roles.hypesquadbrilliance)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('HOUSE_BALANCE')) {
const badgerole = member.guild.roles.cache.get(config.roles.hypesquadbalance)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('EARLY_SUPPORTER')) {
const badgerole = member.guild.roles.cache.get(config.roles.earlysupporter)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('BUGHUNTER_LEVEL_2')) {
const badgerole = member.guild.roles.cache.get(config.roles.bughunterlevel2)
await member.roles.add(badgerole).catch(() => {})
}
if (userflags.has('EARLY_VERIFIED_DEVELOPER')) {
const badgerole = member.guild.roles.cache.get(config.roles.botdeveloper)
await member.roles.add(badgerole).catch(() => {})
} else if (userflags.has('VERIFIED_DEVELOPER')) {
  const badgerole = member.guild.roles.cache.get(config.roles.botdeveloper)
  await member.roles.add(badgerole).catch(() => {})
}
} catch (e) {}
})

client.login(config.bot.token)
