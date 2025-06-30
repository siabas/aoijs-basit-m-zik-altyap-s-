module.exports = [
    {
        name: "skip",
        aliases: ["geç"],
        code:`
$skipTrack
\`⏭\` Şarkı geçildi.
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken şarkı durumunu ayarlayamazsın.]
        `
    }
]