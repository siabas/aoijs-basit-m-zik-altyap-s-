module.exports = [
    {
        name: "shuffle",
        aliases: ["karıştır"],
        code:`
$shuffleQueue
\`🔀\` **$queueLength** şarkı karıştırıldı.
$onlyIf[$queueLength>=3;\`❌\` **3**'den az şarkıyı karıştıramazsın.]
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken şarkı durumunu ayarlayamazsın.]
        `
    }
]