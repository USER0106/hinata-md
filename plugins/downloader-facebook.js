import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
if (!args[1]) return conn.sendButton(m.chat, `*${htki} ғᴀᴄᴇʙᴏᴏᴋ ${htka}*`, null, null, [['sᴅ', `.fb ${args[0]} sd`],['ʜᴅ', `.fb ${args[0]} hd`]],m)

try {
    let { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0])).catch(_ => null)
    let { hd, meta, sd } = result
    let tpe = "sd"
  if (args[1] == 'sd') {
    tpe = sd
  }
  if (args[1] == 'hd') {
    tpe = hd
  }
  let { url } = tpe
  let { duration } = meta
  let { thumb } = result

  conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── ${duration}
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(url)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
       } catch {
       try {
       let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── ${duration}
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(x.result)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
    
    } catch {
    let res = await fetch(`https://api.xteam.xyz/dl/fbv2?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    let x = await res.json()
    let tpa = "sd"
  if (args[1] == 'sd') {
    tpa = x.result.sd.url
  }
  if (args[1] == 'hd') {
    tpa = x.result.hd.url
  }
  let { urls } = tpa
    conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── ${duration}
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(urls)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
    
    }
}
   
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
