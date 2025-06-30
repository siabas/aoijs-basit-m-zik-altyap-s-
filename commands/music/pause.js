module.exports = [
    {
        name: "pause",
        aliases: ["dur"],
        code:`
$pauseTrack
\`⏸\` Şarkı durduruldu.
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken şarkı durumunu ayarlayamazsın.]
        `
    }
]