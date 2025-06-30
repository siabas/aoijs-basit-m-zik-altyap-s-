module.exports = [
    {
        name: "resume",
        aliases: ["devam"],
        code:`
$resumeTrack
\`▶\` Şarkı devam ediyor.
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken şarkı durumunu ayarlayamazsın.]
        `
    }
]