const Discord = require(`discord.js`)

module.exports = {
    name: `NOME DO COMANDO`,
    description: `DESCRIÇÃO PARA O COMANDO`,
    usage: `</COMANDO:ID>`,
	options: [
		{
			name: `comando-info`,
			description: `obter informações de comando`,
			maxLength: 256,
			type: Discord.ApplicationCommandOptionType.String,
		},
	],
    run: async (client, interaction) => {
        const cmd = client.slash.get(interaction.options.getString(`comando-info`) || interaction.commandName);

        const cmdInfo = new Discord.EmbedBuilder()
            .setTitle(`\`\`\`UM TÍTULO QUALQUER\`\`\``)
            .setColor(`#2b2d31`)  // #2b2d31`            
            .setDescription(`SEI LÁ VEIO`)
            .addFields([
                {
                    name: `Comando`,
                    value: `${cmd.name}`,
                    inline: false,
                },
                {
                    name: `Descrição`,
                    value: `${cmd.description || `\`Sem Descrição\``}`,
                    inline: false,
                },
                {
                    name: `Como Usar`,
                    value: `${cmd.usage || `\`Não Informa\``}`,
                    inline: false,
                }
            ]);

        interaction.reply({ ephemeral: true, embeds: [cmdInfo] });
    },
};
