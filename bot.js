require ('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
],
partials: ['MESSAGE']
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';


client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('our bot is ready to go');
})

client.on('messageDelete',(msg)=>{
    msg.channel.send('Stop deleting messages');
})

client.on('messageCreate',(msg)=>{
    if(msg.content==='ping'){
        // msg.reply({
        //     content:'pooong!!!'
        // });
        msg.channel.send({content:'not tagged!!!'});
    }
    if(msg.content === 'I Love My India'){
        msg.react('🧡');
    }
    if(msg.content=== `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        // msg.member.roles.add("885540138267074560");
        modUser(msg.member);

    }
    
    // if(msg.content==='$mod-me'){
    //     msg.member.roles.remove("885540138267074560");
    // }
})
function modUser(member){
    member.roles.add("885540138267074560");
}

client.login(process.env.BOT_TOKEN);




