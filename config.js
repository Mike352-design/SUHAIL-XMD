const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Alvino" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254104916091";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "All contacts";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_02_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZhSmhNZ3NYQjUyemdBOG9ZRUxUSk1FQVl3UDN6QTF2VXR2bmdQaDRFNXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFNZVlsRFB1VGxXZHBYWG90cVRsMmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjI1ODMwZDQtNjJhOS00NzNmLWI3NjgtNDlhNTU2NWU1NWJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMjEzLFxuICAgICAgNzMsXG4gICAgICA5OSxcbiAgICAgIDIzMCxcbiAgICAgIDQ0LFxuICAgICAgMTA2LFxuICAgICAgOTIsXG4gICAgICAxNzgsXG4gICAgICAxODYsXG4gICAgICAxNjMsXG4gICAgICAyOCxcbiAgICAgIDc1LFxuICAgICAgMTg1LFxuICAgICAgNzUsXG4gICAgICAyMDAsXG4gICAgICAxMSxcbiAgICAgIDQzLFxuICAgICAgMTUsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxNzUsXG4gICAgICA2NixcbiAgICAgIDIyNCxcbiAgICAgIDI1LFxuICAgICAgMjM0LFxuICAgICAgMTE0LFxuICAgICAgNTAsXG4gICAgICAwLFxuICAgICAgMzYsXG4gICAgICA2OSxcbiAgICAgIDMxLFxuICAgICAgMjUzLFxuICAgICAgMTg2LFxuICAgICAgMTI2LFxuICAgICAgMTMzLFxuICAgICAgMjMsXG4gICAgICA3MCxcbiAgICAgIDE1MSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTERCR0NaSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTA0OTE2MDkxOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODI0MTYzNzExMzA2MTU6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJ5bVpBQ0VNWDR5N3NHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRb1pIb00vYlYyd09nZ2FzUHAyTWVRTjgzZHFNQWY5TTZodUpUTDA3R3pjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1WUEl3UitFNXMwRko3b0tHMTJwbHFXOHV6VkVZcThkRVZhV1J6aUR2MjVBWWFDb2xQYUJJTWhOS1pZSXhGaGw2aWovY3lXSDFaSktxQS93NURaUkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpLRXRJNWxPSXB1cTVGQ3VJS1p5bFdLUmVsaVd1VWdwREF3TkZKcEtJc21HeWNqSFBlQlQxTXZFdFJyUk1pcEVRbDU4NmFFeWE1UDQzSHpINUIxMWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwNDkxNjA5MTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU1ODg5Mzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Alvin 25 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Alvin presents",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Depwh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
