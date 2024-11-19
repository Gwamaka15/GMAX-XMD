import _0x3d0de1 from 'axios';
import _0x124ecd from '../../config.cjs';
const githubStalk = async (_0x4b5f8f, _0x3c7901) => {
  try {
    const _0x5be6ba = _0x124ecd.PREFIX;
    const _0x4c4192 = _0x4b5f8f.body.startsWith(_0x5be6ba) ? _0x4b5f8f.body.slice(_0x5be6ba.length).split(" ")[0].toLowerCase() : '';
    const _0x44e612 = _0x4b5f8f.body.slice(_0x5be6ba.length + _0x4c4192.length).trim();
    const _0xa95293 = _0x44e612.split(" ");
    const _0x7bbff0 = ["githubstalk", "github"];
    if (_0x7bbff0.includes(_0x4c4192)) {
      if (!_0xa95293[0]) {
        return _0x4b5f8f.reply("Mention a GitHub username to stalk.");
      }
      const _0x417209 = _0xa95293[0];
      try {
        const _0x18801a = await _0x3d0de1.get("https://api.github.com/users/" + _0x417209);
        const _0x115146 = _0x18801a.data;
        if (_0x18801a.status !== 200) {
          return _0x4b5f8f.reply("❌ GitHub user not found.");
        }
        let _0x178de0 = "🌟 *GitHub Profile - @" + _0x115146.login + "*\n\n";
        _0x178de0 += " ◦ *Name*: " + (_0x115146.name || "N/A") + "\n";
        _0x178de0 += " ◦ *Username*: @" + _0x115146.login + "\n";
        _0x178de0 += " ◦ *Bio*: " + (_0x115146.bio || "N/A") + "\n";
        _0x178de0 += " ◦ *ID*: " + _0x115146.id + "\n";
        _0x178de0 += " ◦ *Node ID*: " + _0x115146.node_id + "\n";
        _0x178de0 += " ◦ *Profile URL*: " + _0x115146.avatar_url + "\n";
        _0x178de0 += " ◦ *GitHub URL*: " + _0x115146.html_url + "\n";
        _0x178de0 += " ◦ *Type*: " + _0x115146.type + "\n";
        _0x178de0 += " ◦ *Admin*: " + (_0x115146.site_admin ? "Yes" : 'No') + "\n";
        _0x178de0 += " ◦ *Company*: " + (_0x115146.company || "N/A") + "\n";
        _0x178de0 += " ◦ *Blog*: " + (_0x115146.blog || "N/A") + "\n";
        _0x178de0 += " ◦ *Location*: " + (_0x115146.location || "N/A") + "\n";
        _0x178de0 += " ◦ *Email*: " + (_0x115146.email || "N/A") + "\n";
        _0x178de0 += " ◦ *Public Repositories*: " + _0x115146.public_repos + "\n";
        _0x178de0 += " ◦ *Public Gists*: " + _0x115146.public_gists + "\n";
        _0x178de0 += " ◦ *Followers*: " + _0x115146.followers + "\n";
        _0x178de0 += " ◦ *Following*: " + _0x115146.following + "\n";
        _0x178de0 += " ◦ *Created At*: " + _0x115146.created_at + "\n";
        _0x178de0 += " ◦ *Updated At*: " + _0x115146.updated_at + "\n";
        const _0x4b2bac = await _0x3d0de1.get("https://api.github.com/users/" + _0x417209 + "/repos?per_page=5&sort=stargazers_count&direction=desc");
        const _0x256450 = _0x4b2bac.data;
        if (_0x256450.length > 0) {
          const _0x2b267c = _0x256450.slice(0, 5);
          const _0x36a2fd = _0x2b267c.map(_0x8ee097 => {
            return " ◦ *Repository*: [" + _0x8ee097.name + '](' + _0x8ee097.html_url + ")\n ◦ *Description*: " + (_0x8ee097.description || "N/A") + "\n ◦ *Stars*: " + _0x8ee097.stargazers_count + "\n ◦ *Forks*: " + _0x8ee097.forks;
          });
          const _0x207383 = "📚 *Top Starred Repositories*\n\n" + _0x36a2fd.join("\n\n");
          _0x178de0 += "\n\n" + _0x207383;
        } else {
          _0x178de0 += "\n\nNo public repositories found.";
        }
        await _0x3c7901.sendMessage(_0x4b5f8f.from, {
          'image': {
            'url': _0x115146.avatar_url
          },
          'caption': _0x178de0
        }, {
          'quoted': _0x4b5f8f
        });
      } catch (_0x132253) {
        console.error("Error fetching GitHub data:", _0x132253);
        await _0x3c7901.sendMessage(_0x4b5f8f.from, "An error occurred while fetching GitHub data.", {
          'quoted': _0x4b5f8f
        });
      }
    }
  } catch (_0x158555) {
    console.error("Error processing the command:", _0x158555);
    _0x4b5f8f.reply("An error occurred while processing the command.");
  }
};
export default githubStalk;