const Discord = require(`discord.js`);
const { ActivityType } = require('discord.js');

// PS: não tem status de (online, dnd, idle, invisible) deu preguiça em coloca 😒 
// Crédito: mirko93s, Modificação simples: @IamSrHell 

module.exports = {
    name: `botactivity`,
    description: `Set Bot's activity`,
    dev: true,
    defaultPermission: false,
    options: [
        {
            name: `type`,
            description: `Choose activity type`,
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: `Remover`, value: `0` },
                { name: `Playing`, value: `Playing` }, // Jogando
                { name: `Streaming`, value: `Streaming` }, // Transmissão
                { name: `Listening`, value: `Listening` }, // Ouvindo
                { name: `Watching`, value: `Watching` }, // Assistindo
                { name: `Competing`, value: `Competing` }, // Competindo
            ],
        },
        {
            name: `activity`,
            description: `Set new activity, max 128 characters`,
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    run: async (client, interaction) => {

        if (interaction.options.getString(`activity`).length > 128) return interaction.reply({ ephemeral: true, content: `⛔**ERROR** Activity must be long 128 characters or less` });

        const baEmbed = new Discord.EmbedBuilder()
            .setColor(`Random`)
            .setTitle(`Bot Activity Updated`);

        client.user.setPresence({
            activities: [{
                type: ActivityType[interaction.options.getString(`type`)],
                url: 'https://www.twitch.tv/iamsrhell', // Link da seu twitch para o modo "Streaming" não defina como "Jogando"
                name: interaction.options.getString(`activity`)
            }]
        });
        interaction.reply({ ephemeral: true, embeds: [baEmbed] });
    },
};
