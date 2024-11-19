const {
  adams
} = require("../watson/adams");
const {
  getBuffer
} = require("../watson/dl/Function");
const speed = require("performance-now");
function delay(_0x452c88) {
  console.log("⏱️ delay for " + _0x452c88 + 'ms');
  return new Promise(_0x45c724 => setTimeout(_0x45c724, _0x452c88));
}
async function loading(_0x406e96, _0x1342aa) {
  var _0x2d6906 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "Loading pong 🚀"];
  let {
    key: _0x2b1aa2
  } = await _0x1342aa.sendMessage(_0x406e96, {
    'text': "Loading Please Wait"
  });
  for (let _0x225c98 = 0; _0x225c98 < _0x2d6906.length; _0x225c98++) {
    await _0x1342aa.sendMessage(_0x406e96, {
      'text': _0x2d6906[_0x225c98],
      'edit': _0x2b1aa2
    });
    await delay(500);
  }
}
function react(_0x29bf91, _0x24a52b, _0x4740a2, _0x5f4f1f) {
  _0x24a52b.sendMessage(_0x29bf91, {
    'react': {
      'text': _0x5f4f1f,
      'key': _0x4740a2.key
    }
  });
}
adams({
  'nomCom': "ping",
  'desc': "To check ping",
  'Categorie': "General",
  'reaction': '🥇',
  'fromMe': "true"
}, async (_0x5be6ca, _0x2c1cd3, _0x3a6487) => {
  const {
    ms: _0xd555d1,
    arg: _0x360d64,
    repondre: _0x14e8a5
  } = _0x3a6487;
  await loading(_0x5be6ca, _0x2c1cd3);
  const _0x358ed4 = speed();
  const _0x1eb63e = (speed() - _0x358ed4).toFixed(4);
  await _0x14e8a5("*Pong▱▱▱▰▰▰▰▰ " + _0x1eb63e + " MS*");
});
adams({
  'nomCom': "uptime",
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '🥇',
  'fromMe': "true"
}, async (_0x57acc3, _0xc0a7b1, _0x18b943) => {
  const {
    ms: _0xbe9dc8,
    arg: _0x2ef049,
    repondre: _0x366674
  } = _0x18b943;
  await _0x366674("*Gmax speed is: " + runtime(process.uptime()) + '_*');
});
adams({
  'nomCom': 'ss',
  'desc': "screenshots website",
  'Categorie': "General",
  'reaction': '🎥',
  'fromMe': "true"
}, async (_0x3b30b3, _0x276e8f, _0x339d43) => {
  const {
    ms: _0x2da1c8,
    arg: _0x452b19,
    repondre: _0x2aec49
  } = _0x339d43;
  if (!_0x452b19 || _0x452b19.length === 0) {
    return _0x2aec49("provide a link...");
  }
  const _0x26d866 = _0x452b19.join(" ");
  let _0x4d6b06 = "https://api.maher-zubair.tech/misc/sstab?url=" + _0x26d866 + "&dimension=720x720";
  let _0x12502c = await getBuffer(_0x4d6b06);
  await _0x276e8f.sendMessage(_0x3b30b3, {
    'image': _0x12502c
  }, {
    'caption': "*GMAX XMD*"
  }, {
    'quoted': _0x2da1c8
  });
});