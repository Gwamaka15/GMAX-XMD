'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  adams
} = require("../watson/adams");
adams({
  'nomCom': "alive",
  'reaction': '🪄',
  'nomFichier': __filename
}, async (_0x4bc200, _0x3aaeb4, _0x54a1f3) => {
  console.log("Alive command triggered!");
  const _0x272d6f = ["https://files.catbox.moe/oordg5.mp3", "https://files.catbox.moe/zdti7y.wav", "https://files.catbox.moe/nwreb4.mp3", "https://files.catbox.moe/y1uawp.mp3", "https://files.catbox.moe/x4h8us.mp3"];
  try {
    const _0x229b58 = _0x272d6f[Math.floor(Math.random() * _0x272d6f.length)];
    await _0x3aaeb4.sendMessage(_0x4bc200, {
      'text': "🔊 *Preparing your audio...* Please wait..."
    });
    await new Promise(_0x4f32d2 => setTimeout(_0x4f32d2, 1000));
    await _0x3aaeb4.sendMessage(_0x4bc200, {
      'audio': {
        'url': _0x229b58
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'caption': "🚘 *GMAX XMD IS ACTIVES* 🚘🌍✅\n\n🌍 *Bot is Online*\n✨ Health Status: Excellent ✨",
      'contextInfo': {
        'mentionedJid': [_0x54a1f3.nomAuteurMessage || _0x4bc200],
        'externalAdReply': {
          'title': "GMAX XMD ACTIVES 🚘🌍✅",
          'body': "© Mr Gmax",
          'thumbnailUrl': "https://files.catbox.moe/swsy89.jpg",
          'sourceUrl': "https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x",
          'mediaType': 0x2,
          'renderLargeThumbnail': true
        }
      }
    });
    console.log("Alive message with audio and large thumbnail sent successfully!");
  } catch (_0x17c705) {
    console.error("Error sending message:", _0x17c705.message);
  }
});
console.log("WhatsApp bot is ready.");
adams({
  'nomCom': "test",
  'reaction': '🪅',
  'nomFichier': __filename
}, async (_0x227736, _0x4e08e3, _0x3e7674) => {
  console.log("Alive command triggered!");
  const _0x2f4cde = ["https://files.catbox.moe/oordg5.mp3", "https://files.catbox.moe/zdti7y.wav", "https://files.catbox.moe/nwreb4.mp3", "https://files.catbox.moe/y1uawp.mp3", "https://files.catbox.moe/x4h8us.mp3"];
  try {
    const _0x5b5efe = _0x2f4cde[Math.floor(Math.random() * _0x2f4cde.length)];
    await _0x4e08e3.sendMessage(_0x227736, {
      'text': "🔊 *Preparing your audio...* Please wait..."
    });
    await new Promise(_0x5850fb => setTimeout(_0x5850fb, 1000));
    await _0x4e08e3.sendMessage(_0x227736, {
      'audio': {
        'url': _0x5b5efe
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'caption': "🚘 *GMAX XMD IS ACTIVES* 🚘🌍✅\n\n🌍 *Bot is Online*\n✨ Health Status: Excellent ✨",
      'contextInfo': {
        'mentionedJid': [_0x3e7674.nomAuteurMessage || _0x227736],
        'externalAdReply': {
          'title': "GMAX XMD ACTIVES 🚘🌍✅",
          'body': "© Mr Gmax",
          'thumbnailUrl': "https://files.catbox.moe/va22vq.jpeg",
          'sourceUrl': "https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x",
          'mediaType': 0x2,
          'renderLargeThumbnail': true
        }
      }
    });
    console.log("Alive message with audio and large thumbnail sent successfully!");
  } catch (_0x4a7652) {
    console.error("Error sending message:", _0x4a7652.message);
  }
});
console.log("WhatsApp bot is ready.");