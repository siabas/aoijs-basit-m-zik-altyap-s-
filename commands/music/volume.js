module.exports = [
    {
        name: "volume",
        aliases: ["s", "v", "ses"],
        code:`
$volume[$message]
\`🔉\` Ses seviyesi **$message** olarak ayarlandı.
$onlyIf[$message>=50&&$message=<150;\`❌\` Ses seviyesi **50-150** arasında olabilir.]
$onlyIf[$isNumber[$message]!=;\`❌\` Bir sayı girdiğinden emin ol.]
$onlyIf[$message!=;\`❌\` Bir ses seviyesi gir.]
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken ses ayarlayamazsın.]
        `
    }
]