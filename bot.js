const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const fs = require("fs");
const ms = require("ms");

client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("No commands to load.");

  console.log(`loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`The command ${f} has loaded.`);
    client.commands.set(props.help.name, props);
  });
});

client.on("guildMemberAdd", member => {
    const autoRole = require ("./commands/autorole.js")
    let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
    if (!autorole[member.guild.id]) { 
      autorole[member.guild.id] = {
        autorole: "none"
      };
    }
    var role = autorole[member.guild.id].role;
    if (!role) return;
    member.addRole(role);
  });

client.on('ready', () => {
  client.user.setActivity("your commands", { type: 'WATCHING' })
  console.log(`Terminal booted up sucessfully.`);
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.author.send("**/" + message.author.username + "/DM** \n Sorry, but commands in my DMs have been disabled. Please try it in a server." )
  const Censor = require ("./commands/censor.js")
  let censor = JSON.parse(fs.readFileSync("./censor.json", "utf8"));
  if (!censor[message.guild.id]) { 
    censor[message.guild.id] = {
      word: "terminal sucks"
    };
  }
  if (message.content.toLowerCase().includes(censor[message.guild.id].word)) {
    message.delete(50)
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot say that word as administrators have blocked it!")
  }
  const PG = require ("./commands/pg.js")
  let pg = JSON.parse(fs.readFileSync("./pg.json", "utf8"));
  if (!pg[message.guild.id]) { 
    pg[message.guild.id] = {
      mode: 0
    };
  }
  if (pg[message.guild.id].mode === 1) {
    // This section will contain swears!
    if (message.content.toLowerCase().includes("fuck")) {
      message.delete()
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
    }
    if (message.content.toLowerCase().includes("ass")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
      }
      if (message.content.toLowerCase().includes("bastard")) {
        message.delete()
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
        }
        if (message.content.toLowerCase().includes("bitch")) {
          message.delete()
          message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
          }
          if (message.content.toLowerCase().includes("slut")) {
            message.delete()
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
            }
            if (message.content.toLowerCase().includes("pussy")) {
              message.delete()
              message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
              }
          if (message.content.toLowerCase().includes("dick")) {
            message.delete()
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
            }
            if (message.content.toLowerCase().includes("penis")) {
              message.delete()
              message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
              }
            if (message.content.toLowerCase().includes("bollocks")) {
              message.delete()
              message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
              }
              if (message.content.toLowerCase().includes("crap")) {
                message.delete()
                message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                }
                if (message.content.toLowerCase().includes("cunt")) {
                  message.delete()
                  message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                  }
                  if (message.content.toLowerCase().includes("frigger")) {
                    message.delete()
                    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                    }
                    if (message.content.toLowerCase().includes("heck")) {
                      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You're on thin ice, " + message.author)
                      }
                      if (message.content.toLowerCase().includes("frick")) {
                        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You're on thin ice, " + message.author)
                        }
                        if (message.content.toLowerCase().includes("shit")) {
                          message.delete()
                          message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                          }
                          if (message.content.toLowerCase().includes("nigg")) {
                            message.delete()
                            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                            }
                            if (message.content.toLowerCase().includes("niga")) {
                              message.delete()
                              message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                              }
                              if (message.content.toLowerCase().includes("niger")) {
                                message.delete()
                                message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                                }
                                if (message.content.toLowerCase().includes("negro")) {
                                  message.delete()
                                  message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                                  }
                                  if (message.content.toLowerCase().includes("whore")) {
                                    message.delete()
                                    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                                    }
                                    if (message.content.toLowerCase().includes("twat")) {
                                      message.delete()
                                      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot swear as this server is in PG mode!")
                                      }
  }
  const Prefix = require ("./commands/prefix.js")
  let prefixjson = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  if (!prefixjson[message.guild.id]) { 
    prefixjson[message.guild.id] = {
      prefix: ">_"
    };
  }
  let prefix = prefixjson[message.guild.id].prefix

  client.once("messageDelete", (messageDelete) => {
    let deletechannel = "terminal-logs"
    if (messageDelete.author != message.author) {
      return
    } else {
    if (messageDelete.author.id === "521023036812558356") {
      return
    } else {
      if (message.guild.channels.exists('name', deletechannel)) {
        const logdelete = message.guild.channels.find(channel => channel.name === "terminal-logs");
        logdelete.send("**/" + messageDelete.guild + "/" + messageDelete.channel.name + "/** \n  " + `The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
    return;
      } else {
        message.channel.send("**/" + messageDelete.guild + "/" + messageDelete.channel.name + "/** \n  " + `The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted. \n This message will delete in **5 seconds** (there is no terminal-logs channel), so screenshot this message if the user said anything that broke the rules.`).then(msg => { msg.delete(5000)})
   }}}});

  if (message.content.includes(prefix + "delete")) {
    if (message.author.bot) return;
    if (message.author.id != "372078453236957185") {
      if (message.author.id != "365274392680333329") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**" + "You may not run this command.")
    }}
    message.channel.bulkDelete(2);
  }
  const Lockdown = require ("./commands/lockdown.js")
  let lockdown = JSON.parse(fs.readFileSync("./lockdown.json", "utf8"));
  if (!lockdown[message.guild.id]) { 
    lockdown[message.guild.id] = {
      lock: "none"
    };
  }
  if (message.channel.id === (lockdown[message.guild.id].lock)) {
    if (message.author.id === "372078453236957185") return
    if (message.author.id === "365274392680333329") return
    if (message.author.id === "521023036812558356") return
    if (message.member.hasPermission("MANAGE_MESSAGES")) return
    message.delete()
  }
  const Invites = require ("./commands/invites.js")
  let invites = JSON.parse(fs.readFileSync("./invites.json", "utf8"));
  if (!invites[message.guild.id]) { 
    invites[message.guild.id] = {
      block: 0
    };
  }
  if (invites[message.guild.id].block === 1) {
    if (message.content.toLowerCase().includes("discord.gg")) {
    message.delete()
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot post discord server invites as administrators have blocked it!")
  }}

  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) {
    const Blacklist = require ("./commands/blacklist.js")
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    if (!blacklist[message.author.id]) { 
      blacklist[message.author.id] = {
        person: 0
      };
    }
    if (blacklist[message.author.id].person === 1) {
      return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you have been blocked from using Terminal. Please contact square#1255 or speed#3413 for more information.")
    }
  cmd.run(client, message, args);
  let fullCommand = message.content.substr(1) 
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0] 
  console.log(`${message.author.tag} (${message.author.id}) ran >${primaryCommand} in the guild: ` + message.guild.id)
}});

client.login(config.token);
