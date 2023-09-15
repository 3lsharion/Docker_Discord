import axios from 'axios';
import { EmbedBuilder } from 'discord.js';
import { card_claim, treasure, comet, trade } from '../models/log_models.js';
import { data } from '../logs.js';
import * as fs from 'node:fs';

export async function fetchCommands() {
    await axios.get('https://enderbot.com/game/logs').then(resp => {
        let logs = resp.data.substring(resp.data.indexOf("const data = [{"), resp.data.indexOf('"uses":{}}];')+12);
        let exp = "export";
        logs = exp.concat(' ', logs);
        console.log(logs);
        // fs.writeFile('logs.js', logs, (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        // });
    });
}

function initEmbed(logs) {
    const embed = new EmbedBuilder()
        .setColor('#000000')
        .setTitle('Enderbot Logs')
        .addFields(logs)
        .setTimestamp();
    
    const previous = new ButtonBuilder()
        .setCustomId('previous')
        .setLabel('Previous')
        .setStyle(ButtonStyle.Secondary);

    const next = new ButtonBuilder()
        .setCustomId('next')
        .setLabel('Next')
        .setStyle(ButtonStyle.Secondary);

    const buttons = new ActionRowBuilder()
        .addComponents(previous, next);

    return embed;
}

export async function getCardClaimLogs() {
    let logs = [];
    await fetchCommands();
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "card_claim")
        logs.push({
            name: '```'+data[1].data.logs[i].optionalCardData.id + '``` **'+data[1].data.logs[i].optionalCardData.name+'** ('+data[1].data.logs[i].optionalCardData.sourceName+') ('+data[1].data.logs[i].optionalCardData.stars+'☆)',
            value : 'Claim by '+"["+data[1].data.logs[i].source.name+"](https://enderbot.com/game/profile/"+data[1].data.logs[i].source.id+")"
        });
    }
    return initEmbed(logs);
}
5
export async function getTreasureLogs() {
    let logs = [];
    await fetchCommands();
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "treasure")
        logs.push({
            name: 'Shard : ```'+data[1].data.logs[i].content.shard + '``` | <:xp:1150372906325528596> : ```'+data[1].data.logs[i].content.xp + '``` | :star: : ```'+data[1].data.logs[i].content.mana + '``` | Combo : ```'+data[1].data.logs[i].content.combo+'```',
            value : 'Treasure recovered by '+"["+data[1].data.logs[i].source.name+"](https://enderbot.com/game/profile/"+data[1].data.logs[i].source.id+")"
        });
    }
    return initEmbed(logs);
}

export async function getCometLogs() {
    let embed = initEmbed();
    await fetchCommands();
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "comet")
        console.log(data[1].data.logs[i]);
    }
    return embed;
}

export async function getTradeLogs() {
    let embed = initEmbed();
    await fetchCommands();
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "trade")
        console.log(data[1].data.logs[i]);
    }
    return embed;
}