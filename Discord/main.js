import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import { Sequelize, QueryTypes } from 'sequelize';
import * as dbConfig from './db.config.js';
import {card, ping, logs, profile} from './commands/commands.js';
import { getTreasureLogs, getCardClaimLogs, getCometLogs, getTradeLogs, getProfile } from './commands/fetch.js';

const slashCommands = [];

// const token = process.env.TOKEN;
// const client_id = process.env.CLIENT_ID;
const token = "MTA4NzM0MzcwMjIyMzExNDM0MQ.GI_h1J.ZfBIp0ZBtiqIl0STeIetEtZNi5VIfHhBO-cxjg";
const client_id = "1087343702223114341";

slashCommands.push(card.toJSON());
slashCommands.push(ping.toJSON());
slashCommands.push(logs.toJSON());
slashCommands.push(profile.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(client_id), { body: slashCommands });

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

  if (interaction.commandName === 'card') {
    await interaction.reply('<@280726849842053120> card search Kage no Jitsu');
  }

  if (interaction.commandName === 'logs') {
    switch (interaction.options.getString('type')) {
      case 'claim':
        const claim_logs = await getCardClaimLogs();
        await interaction.reply({embeds : [claim_logs[0]], components: [claim_logs[1]]});
        break;
      case 'treasure':
        const treasure_logs = await getTreasureLogs();
        await interaction.reply({embeds : [treasure_logs[0]], components: [treasure_logs[1]]});
        break;
      case 'comet':
        const comet_logs = await getCometLogs();
        await interaction.reply({embeds : [comet_logs[0]], components: [comet_logs[1]]});
        break;
      case 'trade':
        const trade_logs = await getTradeLogs();
        await interaction.reply({embeds : [trade_logs[0]], components: [trade_logs[1]]});
        break;
      default:  
        await interaction.reply('Invalid Input');
    }
  }

  if (interaction.commandName === 'profile') {  
    // await interaction.reply(getProfile(interaction.options.getString('profile')));
    await getProfile(interaction.options.getString('name'));
    await interaction.reply("test");
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