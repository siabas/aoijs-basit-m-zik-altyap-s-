module.exports = [
    {
        name: "play",
        aliases: ["p", "çal", "oynat", "müzik"],
        $if: "old",
        code:`
$channelSendMessage[$channelID;\`➕\` **$search[$message;youtube;{title} - {artist};1]** sıraya eklendi. Sırası: \`$queueLength\`]
$playTrack[$message;youtube]
$if[$hasPlayer==false]
$channelSendMessage[$channelID;\`🔉\` **$channelName[$voiceID[$authorID]]** sesli kanalına katıldım.]
$joinVC
$endif
$onlyIf[$search[$message;youtube;{title}]!=;\`❌\` **$message** adında bir müzik bulamadım.]
$onlyIf[$message!=;\`❌\` Bir müzik ismi gir.]
$onlyIf[$voiceID[$authorID]!=;\`❌\` Bir ses kanalına katılmalısın.]
        `
    }
]