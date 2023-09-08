import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import { fetchCommands } from './commands/fetch.js';
import { getCommands } from './commands/commands.js';
import { Sequelize, QueryTypes } from 'sequelize';
import axios from 'axios';
import * as dbConfig from './db.config.js';

// const token = process.env.TOKEN;
// const client_id = process.env.CLIENT_ID;
const token = "MTA4NzM0MzcwMjIyMzExNDM0MQ.GhIigb.K5RvPKxvdNE4lWENfRzwxpW5Q71V0mvM3bqONQ";
const client_id = "1087343702223114341";

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(client_id), { body: getCommands() });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'random') {
    await interaction.reply((Math.random()*10).toString());
  }

  if (interaction.commandName === 'card') {
    await interaction.reply('<@280726849842053120> card search Kage no Jitsu');
  }

  if (interaction.commandName === 'fetch') {
    fetchCommands();
    await interaction.reply('Done!');
  }
});

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  socketPath: '/var/run/mysqld/mysqld.sock',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

client.login(token);

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// const crypto = await sequelize.query("SELECT * FROM crypto WHERE id = 1", { type: QueryTypes.SELECT });
// console.log(crypto);