const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");

module.exports = ( client ) => {

    const voice = new AoiVoice(client, {
        requestOptions: {
            offsetTimeout: 0,
            soundcloudLikeTrackLimit: 200,
        },
        searchOptions: {
            youtubeClient: "MWEB",
            youtubeCookie: "" //COOKİENİ EKLEMEZSEN NAH ÇALIŞIR HABERİN OLA LAVUK
        }
    });

    voice.addPlugin(PluginName.Cacher, new Cacher("memory"))
    voice.addPlugin(PluginName.Filter, new Filter({
        filterFromStart: false
    })),

    voice.bindExecutor(client.functionManager.interpreter);

    require("./events.js")( client, voice, AoiVoice, PlayerEvents, PluginName, Cacher, Filter )
}