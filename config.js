module.exports = {
    Bot: {
        token: "",
        prefix: "!",
        intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
        events: ["onMessage", "onInteractionCreate"],
        aoiLogs: false,
        aoiWarning: false
    }
}