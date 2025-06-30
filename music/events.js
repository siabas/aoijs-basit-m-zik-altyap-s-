module.exports = ( client , voice, AoiVoice, PlayerEvents, PluginName, Cacher, Filter ) => {
    
    voice.addEvent(PlayerEvents.TrackStart);
    voice.addEvent(PlayerEvents.QueueEnd);

    voice.cmds["trackStart"].set("JAVELİN", {
        channel: "$channelID", 
        code: `
$title[1;🎵 | Sıradaki Müzik Çalmaya Başladı]
$thumbnail[1;$songInfo[thumbnail]]
$description[1;
🎶 **| Çalan Müzik:**
[$songInfo[title] - $songInfo[artist]](https://www.youtube.com/watch?v=$songInfo[id])

⏳ **| Süre:**
\`$digitalFormat[$songInfo[duration]]\`

➕ **| Müziği Ekleyen Kişi:**
$songInfo[requester]

🔉 **| Ses Kanalı:**
<#$voiceID[$clientID]>
]
$color[1;Yellow]
$wait[1000]
$suppressErrors
        `,
    });

    voice.cmds["queueEnd"].set("JAVELİN", {
        channel: "$channelID", 
        $if: "old",
        code: `
\`🔉\` Sıra bitti sesli kanaldan ayrıldım.
$if[$voiceID[$clientID]!=]
$leaveVC
$endif
$suppressErrors
        `,
    });
}