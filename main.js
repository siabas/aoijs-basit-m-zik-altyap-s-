const { AoiClient } = require("aoi.js");
const config = require("./config.js")

const client = new AoiClient(config.Bot);

require("./events/ready.js")( client )
require("./music/main.js")( client )

client.loadCommands("./commands", false);