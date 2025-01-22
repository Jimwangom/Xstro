import dotenv from 'dotenv';
dotenv.config();

const config = {
  SESSION_ID: process.env.SESSION_ID || 'XSTRO_09_81_64',
  SUDO: process.env.SUDO || '255628470507',
  API_ID: process.env.API_ID || 'https://xstro-api-4fb28ece11a9.herokuapp.com',
  BOT_INFO: process.env.BOT_INFO || 'αѕтяσχ11;χѕтяσ м∂',
  STICKER_PACK: process.env.STICKER_PACK || 'мα∂є ву;χѕтяσ мυℓтι ∂єνι¢є вσт',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'Africa/Dodoma',
  VERSION: '1.3.0',
};

const getSessionId = async () =>
  (await fetch(`https://xstrosession.koyeb.app/session?session=${config.SESSION_ID}`)
    .then((res) => (res.ok ? res.json() : null))
    .catch(() => null)) ?? null;

const sessionData = await getSessionId();

export { config, sessionData };
export default { config, sessionData };
