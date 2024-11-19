require("dotenv").config();
const {
  adams
} = require("../watson/adams");
const yts = require("yt-search");
const axios = require("axios");
const BaseUrl = process.env.GITHUB_GIT;
const adamsapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !adamsapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
function delay(_0x29a088) {
  console.log("⏱️ delay for " + _0x29a088 + 'ms');
  return new Promise(_0x4cc252 => setTimeout(_0x4cc252, _0x29a088));
}
async function dynamicLoading(_0x19452f, _0x402da2, _0x2aafdc, _0x381320) {
  const _0x4cdb22 = ["*▰▰▰▱▱▱▱▱▱▱*", "*▰▰▰▰▱▱▱▱▱▱*", "*▰▰▰▰▰▱▱▱▱▱*", "*▰▰▰▰▰▰▱▱▱▱*", "*▰▰▰▰▰▰▰▱▱▱*", "*▰▰▰▰▰▰▰▰▱▱*", "*▰▰▰▰▰▰▰▰▰▱*", "*▰▰▰▰▰▰▰▰▰▰*"];
  let _0x4801b0 = false;
  const _0x290b26 = _0x381320()["finally"](() => {
    _0x4801b0 = true;
  });
  while (!_0x4801b0) {
    for (const _0x5c4de7 of _0x4cdb22) {
      await delay(250);
      await _0x402da2.sendMessage(_0x19452f, {
        'text': _0x5c4de7,
        'edit': _0x2aafdc
      });
      if (_0x4801b0) {
        break;
      }
    }
  }
  return _0x290b26;
}
function react(_0x2b4319, _0x4597ad, _0x2dd47e, _0x2d3d22) {
  _0x4597ad.sendMessage(_0x2b4319, {
    'react': {
      'text': _0x2d3d22,
      'key': _0x2dd47e.key
    }
  });
}
async function searchYouTube(_0x42c613) {
  try {
    const _0x455a45 = await yts(_0x42c613);
    return _0x455a45.videos.length > 0 ? _0x455a45.videos[0] : null;
  } catch (_0x316fc5) {
    console.error("YouTube Search Error:", _0x316fc5);
    return null;
  }
}
async function downloadMedia(_0x417627, _0x2dea28) {
  try {
    const _0xfe9975 = BaseUrl + "/api/download/yt" + _0x2dea28 + "?url=" + encodeURIComponent(_0x417627) + "&apikey=" + adamsapikey;
    const {
      data: _0x209de3
    } = await axios.get(_0xfe9975);
    return _0x209de3.status === 200 && _0x209de3.success ? _0x209de3.result.download_url : null;
  } catch (_0x2c59b8) {
    console.error("API Error (" + _0x2dea28 + '):', _0x2c59b8);
    return null;
  }
}
adams({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x3355f2, _0x477db5, _0x273042) => {
  const {
    ms: _0x5ae4e3,
    repondre: _0x12592c,
    arg: _0x1a378b
  } = _0x273042;
  if (!_0x1a378b[0]) {
    return _0x12592c("Please insert a song/video name.");
  }
  const _0x4b7df9 = await searchYouTube(_0x1a378b.join(" "));
  if (!_0x4b7df9) {
    return _0x12592c("No videos found. Try another name.");
  }
  const {
    key: _0x6ce861
  } = await _0x477db5.sendMessage(_0x3355f2, {
    'image': {
      'url': _0x4b7df9.thumbnail
    },
    'caption': "Gmax xmd is downloading *" + _0x4b7df9.title + "* by " + _0x4b7df9.author.name + "\n⏱️ Time: " + _0x4b7df9.timestamp + "\n\n> ©Mr Gmax"
  }, {
    'quoted': _0x5ae4e3
  });
  const _0x36f848 = await dynamicLoading(_0x3355f2, _0x477db5, _0x6ce861, async () => {
    return await downloadMedia(_0x4b7df9.url, "mp4");
  });
  if (!_0x36f848) {
    return _0x12592c("Failed to download the video.");
  }
  await _0x477db5.sendMessage(_0x3355f2, {
    'video': {
      'url': _0x36f848
    },
    'mimetype': "video/mp4"
  }, {
    'quoted': _0x5ae4e3
  });
  _0x12592c("Downloaded Successfully ✅");
});
adams({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x549813, _0x45b410, _0x3f3892) => {
  const {
    ms: _0x3e3c74,
    repondre: _0x426518,
    arg: _0x1dbae9
  } = _0x3f3892;
  if (!_0x1dbae9[0]) {
    return _0x426518("Please insert a song name.");
  }
  const _0x2a2dd6 = await searchYouTube(_0x1dbae9.join(" "));
  if (!_0x2a2dd6) {
    return _0x426518("No audio found. Try another name.");
  }
  const {
    key: _0x62a7e1
  } = await _0x45b410.sendMessage(_0x549813, {
    'image': {
      'url': _0x2a2dd6.thumbnail
    },
    'caption': "*GMAX SONG PLAYER*\n\n*◁ II ▷ 1:00 • " + _0x2a2dd6.timestamp + "*\n\n*©Ibrahim Adams*"
  }, {
    'quoted': _0x3e3c74
  });
  const _0x3064c1 = await dynamicLoading(_0x549813, _0x45b410, _0x62a7e1, async () => {
    return await downloadMedia(_0x2a2dd6.url, "mp3");
  });
  if (!_0x3064c1) {
    return _0x426518("Failed to download the audio.");
  }
  await _0x45b410.sendMessage(_0x549813, {
    'audio': {
      'url': _0x3064c1
    },
    'mimetype': "audio/mp4"
  }, {
    'quoted': _0x3e3c74
  });
  _0x426518("*Gmax xmd Just Downloaded " + _0x2a2dd6.title + "*\n\n*®Mr Gmax 2024*");
});
adams({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x1ed252, _0x5c6abe, _0x10cfec) => {
  const {
    ms: _0x1f7841,
    repondre: _0x32dea5,
    arg: _0x159845
  } = _0x10cfec;
  if (!_0x159845[0]) {
    return _0x32dea5("Please insert a song name.");
  }
  const _0x22df56 = await searchYouTube(_0x159845.join(" "));
  if (!_0x22df56) {
    return _0x32dea5("No audio found. Try another name.");
  }
  const {
    key: _0x372733
  } = await _0x5c6abe.sendMessage(_0x1ed252, {
    'image': {
      'url': _0x22df56.thumbnail
    },
    'caption': "*GMAX SONG PLAYER*\n\n*◁ II ▷ 1:00 • " + _0x22df56.timestamp + "*\n\n*©Mr Gmax*"
  }, {
    'quoted': _0x1f7841
  });
  const _0x3d0077 = await dynamicLoading(_0x1ed252, _0x5c6abe, _0x372733, async () => {
    return await downloadMedia(_0x22df56.url, "mp3");
  });
  if (!_0x3d0077) {
    return _0x32dea5("Failed to download the audio.");
  }
  await _0x5c6abe.sendMessage(_0x1ed252, {
    'audio': {
      'url': _0x3d0077
    },
    'mimetype': "audio/mp4"
  }, {
    'quoted': _0x1f7841
  });
  _0x32dea5("*Gmax xmd Just Downloaded " + _0x22df56.title + "*\n\n*®Mr Gmax 2024*");
});