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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_19_03_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFqZWZFUEovbU12dktnRUtOK3ZoV0d5d25UK3FBMWhPVEg3VnZBK0VOQ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhKRVR5bENxVFptZmRGUG8xbTRlaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWUxYWFmZDEtN2ZkMS00MzY1LWJjYjctZWQ4NWRhYzZlZTBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE0MyxcbiAgICAgIDE0NSxcbiAgICAgIDIzMyxcbiAgICAgIDI1MCxcbiAgICAgIDE2OCxcbiAgICAgIDIzOSxcbiAgICAgIDE3NCxcbiAgICAgIDU1LFxuICAgICAgMjMsXG4gICAgICAyNDksXG4gICAgICAxNTUsXG4gICAgICAxOTYsXG4gICAgICAyMTUsXG4gICAgICAyMTUsXG4gICAgICA2OSxcbiAgICAgIDIwMSxcbiAgICAgIDE3OCxcbiAgICAgIDEwMSxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDIxLFxuICAgICAgMTQsXG4gICAgICAzMSxcbiAgICAgIDExMCxcbiAgICAgIDE4OSxcbiAgICAgIDMwLFxuICAgICAgMjEyLFxuICAgICAgMjAwLFxuICAgICAgMjEyLFxuICAgICAgNzQsXG4gICAgICAxNTgsXG4gICAgICAyNDUsXG4gICAgICA5OSxcbiAgICAgIDE4NyxcbiAgICAgIDE2MyxcbiAgICAgIDE5OSxcbiAgICAgIDIzNSxcbiAgICAgIDE3MixcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSV0Q5VkdZMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNjEwNzgyNDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4NDk0MDk2NDA0NjUwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QNDVxVUVFSVRWM2I0R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK0g2K0VmN25LNnJvTnRXekQ5Z0NSMGpjVEt5UmFoQXRSM1RObFdRS0dUZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjYjlmWUo0MWFLTHp6UkE3VUhJRG1YZ1NhY0lMTDRrc2RwK0RZVGFOaDBjRW5CTHZVSkJiaGd0ajExbW9oclFXS2FpSFg0dFF0bTNwYi9PSFM4bk1BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXQ3JhdmwxQTdKWXVVQnk0YkJ4WVBKaGVsNG5uR2dGVGErQlJPNVh1SDcvaktndmp5RHJXampxa3hOUEh0bGlNUUY0S2hPNE5jNU4yMEpTb04zSGRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE2MTA3ODI0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyMTcwNzYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
