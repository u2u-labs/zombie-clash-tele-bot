import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN || '';

if (!BOT_TOKEN) {
  console.error('❌ BOT_TOKEN is missing! Check your .env file.');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

console.log('🚀 Bot is starting...');

/**
 * Function to get user profile photo URL
 */

bot.command('start', (ctx) => {
  console.log("receive start command")
  ctx.reply("Log in using LayerG Universal Account:", {
    reply_markup: {
      inline_keyboard: [[
        { text: "Verify", url: "https://t.me/layerg_ua_verification_dev_bot?start=login-1-7c581609293E503dE149d93f34767DFF33d32C16" }
      ]]
    }
  });
});

bot.launch().then(() => console.log('✅ Bot is running in polling mode! 🚀'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
