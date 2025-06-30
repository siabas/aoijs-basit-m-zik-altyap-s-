module.exports = [
    {
        name: "loop",
        aliases: ["tekrar"],
        code:`
$loopMode[$replaceText[$replaceText[$replaceText[$message;sıra;queue];şarkı;song];kapat;none]]
\`🔁\` Loop mod **$message** olarak değiştirildi.
$onlyIf[$loopMode!=$message;\`❌\` Loop mod zaten **$message** olarak ayarlı.]
$onlyIf[$checkContains[$toLowercase[$message];sıra;şarkı;kapat]!=false;\`❌\` Bir seçenek belirt **sıra, şarkı, kapat**.]
$onlyIf[$queueLength!=;\`❌\` Müzik çalmazken şarkı durumunu ayarlayamazsın.]
        `
    }
]