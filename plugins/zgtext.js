/* # Exclusively from MsJessica
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "```YOU MUST ENTER WORDS!``` \n\n alpha"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'zgtext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=5OL4ma89DDedVKW59XEXIKivsII&text1=${encodeURIComponent(match[1])}&text2=GANG`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'ᑕᖇEᗩTEᗪ ᗷY alpha' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'zgtext ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=5OL4ma89DDedVKW59XEXIKivsII&text1=${encodeURIComponent(match[1])}&text2=GANG`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'ᑕᖇEᗩTEᗪ ᗷY alpha' })

    }));
    
}
