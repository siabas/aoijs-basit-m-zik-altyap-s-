module.exports = [
    {
        name: "leave",
        aliases: ["çık"],
        code:`
$leaveVC
\`🔉\` Çıkılıyor.
$onlyIf[$joinVC[$clientID]!=;\`❌\` Sesli kanalda zaten değilim.]
        `
    }
]