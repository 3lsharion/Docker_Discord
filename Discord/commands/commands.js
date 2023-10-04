import { SlashCommandBuilder } from 'discord.js';

export const card = new SlashCommandBuilder()
    .setName('card')
    .setDescription('Test command for card game');

export const logs = new SlashCommandBuilder()
    .setName('logs')
    .setDescription('Print the Enderbot logs')
    .addStringOption(option =>
      option.setName('type')
        .setDescription('Type of logs you want to print')
        .setRequired(true));

export const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

export const profile = new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Profile')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Profile name')
        .setRequired(true));
