import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*───────────────────────────────────────────────*

global.botNumber = "" //Ejemplo: 573218138672

//*───────────────────────────────────────────────*

global.owner = ["5492994587598"]
global.suittag = ["5492994587598"]
global.prems = []

//*───────────────────────────────────────────────*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//*───────────────────────────────────────────────*
// 🔥 BRANDING PICOLAS-BOT
//*───────────────────────────────────────────────*

global.botname = "☆彡 {𝙿𝚒𝚌𝚘𝚕𝚊𝚜-𝙱𝙾𝚃} ミ☆"
global.textbot = "Bot desarrollado por Picolas."
global.dev = "© 𝙋𝙞𝙘𝙤𝙡𝙖𝙨"
global.author = "© 𝙋𝙞𝙘𝙤𝙡𝙖𝙨"
global.etiqueta = "𝙋𝙞𝙘𝙤𝙡𝙖𝙨"
global.currency = "¥enes"

global.banner = "https://files.catbox.moe/vpvbkb.png"
global.icono = "https://files.catbox.moe/n7r3na.png"
global.catalogo = fs.readFileSync('./lib/catalogo.png')

//*───────────────────────────────────────────────*

global.group = "https://chat.whatsapp.com/HaKf6ezcwdbGzmH782eBal"
global.community = "https://chat.whatsapp.com/G0kXqsteJFU74yrLtg79o6"
global.channel = "https://whatsapp.com/channel/0029Vb64nWqLo4hb8cuxe23n"
global.github = "https://github.com/picolasYT" // <- Cambiado
global.gmail = "picolassoporte@gmail.com"

global.ch = {
  ch1: "120363401404146384@newsletter"
}

//*───────────────────────────────────────────────*

global.APIs = {
  xyro: { url: "https://api.xyro.site", key: null },
  yupra: { url: "https://api.yupra.my.id", key: null },
  vreden: { url: "https://api.vreden.web.id", key: null },
  delirius: { url: "https://api.delirius.store", key: null },
  zenzxz: { url: "https://api.zenzxz.my.id", key: null },
  siputzx: { url: "https://api.siputzx.my.id", key: null },
  adonix: { url: "https://api-adonix.ultraplus.click", key: 'Destroy-xyz' }
}

//*───────────────────────────────────────────────*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
