const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle, ApplicationCommandType } = require("discord.js");
const package = require(`../../../package.json`);

/**
 * Quanto mais nos elevamos, menores parecemos aos olhos daqueles que não sabem voar.
 * Friedrich Nietzsche
 */

module.exports = {
    name: 'ajuda',
    description: 'DESCRIÇÃO DO COMANDO', // Você sabe o que fazer aqui, certo?
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const membro = interaction.user;

        const embedHelp = new EmbedBuilder()
            .setAuthor({ name: `${client.user.username} - Central de Ajuda`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`👋 Olá **${membro.displayName}**, eu sou o **${client.user.username}**.\nUm simples Bot feito sem Discord.js (${package.dependencies[`discord.js`]}) & Node.js (${process.version})`)
            .setColor("#2f3136")
            .addFields([
                {
                    name: `🔴 Gerenciamento:`,
                    value: `- Administração\n- Configurações`,
                    inline: true,
                }
            ])
            .addFields([
                {
                    name: `🟢 Entretenimento:`,
                    value: `- Utilidade\n- Diversão`,
                    inline: true,
                }
            ])
            .setFooter({ text: `Requerido por ${membro.displayName}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

        const botaoHelp = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(`Administração`)
                    .setCustomId(`administracao`)
                    .setDisabled(false)
                    .setStyle(ButtonStyle.Danger),

                new ButtonBuilder()
                    .setLabel(`Configurações`)
                    .setCustomId(`configuracao`)
                    .setDisabled(false)
                    .setStyle(ButtonStyle.Danger),

                new ButtonBuilder()
                    .setLabel(`Utilidade`)
                    .setCustomId(`utilidade`)
                    .setDisabled(false)
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setLabel(`Diversão`)
                    .setCustomId(`diversao`)
                    .setDisabled(false)
                    .setStyle(ButtonStyle.Success),
            )

        const msg = await interaction.reply({ embeds: [embedHelp], components: [botaoHelp] })
        const collector = msg.createMessageComponentCollector()
        collector.on('collect', async i => {
            if (i.customId == 'administracao') {
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `\`❌\` Apenas ${interaction.user.tag} pode interagir com os botões!`, ephemeral: true })
                }
                i.update({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('**Comandos de Administração**')
                            .setDescription(`**Lorem ipsum é um texto utilizado para preencher espaços, com a finalidade de verificar o layout, tipografia e formatação antes de utilizar o conteúdo real.**`)
                            .setColor("#2f3136")
                            .setFooter({ text: `Requerido por ${membro.displayName}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
                            .setTimestamp()
                    ], components: [botaoHelp]
                })
            }
            if (i.customId == 'configuracao') {
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `\`❌\` Apenas ${interaction.user.tag} pode interagir com os botões!`, ephemeral: true })
                }
                i.update({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('**Comandos de Configuração**')
                            .setDescription(`**Lorem ipsum é um texto utilizado para preencher espaços, com a finalidade de verificar o layout, tipografia e formatação antes de utilizar o conteúdo real.**`)
                            .setColor("#2f3136")
                            .setFooter({ text: `Requerido por ${membro.displayName}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
                            .setTimestamp()
                    ], components: [botaoHelp]
                })
            }
            if (i.customId == 'utilidade') {
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `\`❌\` Apenas ${interaction.user.tag} pode interagir com os botões!`, ephemeral: true })
                }
                i.update({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('**Comandos de Utilidade**')
                            .setDescription(`**Lorem ipsum é um texto utilizado para preencher espaços, com a finalidade de verificar o layout, tipografia e formatação antes de utilizar o conteúdo real.**`)
                            .setColor("#2f3136")
                            .setFooter({ text: `Requerido por ${membro.displayName}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
                            .setTimestamp()
                    ], components: [botaoHelp]
                })
            }
            if (i.customId == 'diversao') {
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `\`❌\` Apenas ${interaction.user.tag} pode interagir com os botões!`, ephemeral: true })
                }
                i.update({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('**Comandos de Diversão**')
                            .setDescription(`**Lorem ipsum é um texto utilizado para preencher espaços, com a finalidade de verificar o layout, tipografia e formatação antes de utilizar o conteúdo real.**`)
                            .setColor("#2f3136")
                            .setFooter({ text: `Requerido por ${membro.displayName}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
                            .setTimestamp()
                    ], components: [botaoHelp]
                })
            }
        })
    }
}
