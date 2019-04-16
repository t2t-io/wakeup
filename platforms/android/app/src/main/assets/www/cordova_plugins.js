cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-tts.tts",
      "file": "plugins/cordova-plugin-tts/www/tts.js",
      "pluginId": "cordova-plugin-tts",
      "clobbers": [
        "TTS"
      ]
    },
    {
      "id": "acidhax.cordova.chromecast.ChromecastApi",
      "file": "plugins/acidhax.cordova.chromecast/chrome.cast.js",
      "pluginId": "acidhax.cordova.chromecast",
      "clobbers": [
        "chrome.cast"
      ]
    },
    {
      "id": "acidhax.cordova.chromecast.EventEmitter",
      "file": "plugins/acidhax.cordova.chromecast/EventEmitter.js",
      "pluginId": "acidhax.cordova.chromecast"
    },
    {
      "id": "acidhax.cordova.chromecast.tests",
      "file": "plugins/acidhax.cordova.chromecast/tests/tests.js",
      "pluginId": "acidhax.cordova.chromecast"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-tts": "0.2.3",
    "acidhax.cordova.chromecast": "0.0.1-alpha"
  };
});