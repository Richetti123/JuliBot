let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*Trabaja duro , sueña en grande* ${pesan}`
let teks = `*✨DESPIERTEN, HAY ACTIVIDAD✨*\n𝘔𝘪𝘤𝘩𝘪𝘉𝘰𝘵🥇\n${oi}\n\n*Menciones:*\n`
for (let mem of participants) {
teks += `💫✨ @${mem.id.split('@')[0]}\n`}
teks += `@comunidad.td12`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
