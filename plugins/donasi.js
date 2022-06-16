let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
╭──『 _*Donasi*_ 』──⬣
│⬡ *_Dana_* :
│⬡ *088233832771*
│
│⬡ *_Gopay_* :
│⬡ *088233832771*
╰─────────⬣
╭─「 *NOTE* 」
│ > Owner? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰──────────⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ѕαωєʀια', url: psaweria}},
    {index: 2, urlButton: {displayText: 'ιηѕтαgʀαм', url: sig}},
    {index: 3, urlButton: {displayText: 'gʀυρ вσт', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'мєηυ', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'σωηєʀ', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
