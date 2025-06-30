module.exports = ( client ) => {
    client.readyCommand(
        {
            channel: "",
            code:`
$log[[ + ] $username[$clientID] olarak giriş yapıldı.]
            `
        }
    )
}