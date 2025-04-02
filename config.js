const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_41_04_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJNM3dNOElmNndpbE1VUlh3K3lUWHd3aWdlOEFLNkRIL1ZtV1JFSHdQSU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFzX1JVTzNjUjcyd19Hd3NidFFHNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWEwMDBkMTgtZjUzZC00OWQxLTlhYjQtNmZkMDM3NWE1ZWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTc3LFxuICAgICAgMTM4LFxuICAgICAgMTQ4LFxuICAgICAgMTUzLFxuICAgICAgMTM4LFxuICAgICAgMTM4LFxuICAgICAgMjE0LFxuICAgICAgNjUsXG4gICAgICAyNDEsXG4gICAgICA3NCxcbiAgICAgIDE5OCxcbiAgICAgIDIwMyxcbiAgICAgIDIxNCxcbiAgICAgIDE3NixcbiAgICAgIDIzLFxuICAgICAgMjIsXG4gICAgICA4NCxcbiAgICAgIDI0NSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDE2MSxcbiAgICAgIDIzOSxcbiAgICAgIDExNSxcbiAgICAgIDE5MyxcbiAgICAgIDEyNixcbiAgICAgIDg5LFxuICAgICAgMzMsXG4gICAgICAyMTYsXG4gICAgICAxOTksXG4gICAgICA5MixcbiAgICAgIDEwMCxcbiAgICAgIDE5NCxcbiAgICAgIDMxLFxuICAgICAgMTMsXG4gICAgICAxMzEsXG4gICAgICAyMzQsXG4gICAgICA0NSxcbiAgICAgIDI5LFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdGM1dWVzZQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MDQ4NTQ0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb2huXCIsXG4gICAgXCJsaWRcIjogXCIyMDg2NTQwNDExNzEzMjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTaHAvZ0NFSUg2dHI4R0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXI2NVZsYUR3d0NXVkxQVm1GalNOMTJmNXhaVXkrY1dVQ29mZ0JGVEZGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJObXJjdXcyaFBRU0g2eHh6NDF5UHJKRytzcXpGSEU4VERFeTUxR1BMOVFWbVpqeHI1ajNJaFNZc29VMEhqWnpiZHROamNxOGdWWWFBWmNuazRGZGxBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQR0JTN3I1cXJyMWVWTEluN3NmS1hPR2JjQ0lwVkdMaUl6V1hSd2FETkF5QXdpUWd1dnQ2UXJXL1VMZmpBakNOMGNHOWM3NzBJS2FzTjNaNmpIR0RqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4MDQ4NTQ0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzYzMzY3MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0==="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
