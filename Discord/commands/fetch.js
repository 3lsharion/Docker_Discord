import axios from 'axios';
import { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';
import { data } from '../logs.js';
import * as fs from 'node:fs';

async function fetchCommands() {
    await axios.get('https://enderbot.com/game/logs').then(resp => {
        let logs = resp.data.substring(resp.data.indexOf("const data = [{"), resp.data.indexOf('"uses":{}}];')+12);
        let exp = "export";
        logs = exp.concat(' ', logs);
        console.log(logs);
        fs.writeFile('./logs.js', logs, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
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

    return [embed,buttons];
}

function initProfileEmbed(infos) {
    let rank_image_num = 0;
    switch (infos.grade_code) {
        case "bronze":
            rank_image_num = 1;
            break;
        case "silver":
            rank_image_num = 2;
            break;
        case "gold":
            rank_image_num = 3;
            break;
        case "master":
            rank_image_num = 4;
            break;
        case "competitor":
            rank_image_num = 5;
            break;
        case "champion":
            rank_image_num = 6;
            break;
        case "emperor":
            rank_image_num = 7;
            break;
        case "legend":
            rank_image_num = 8;
            break;
        default:
            rank_image_num = 1;
            break;
    }

    const embed = new EmbedBuilder()
        .setColor('#000000')
        .setAuthor({ name: 'RTA Stats'})
        .setDescription('# '+infos.nickname)
        .setThumbnail('https://static.smilegatemegaport.com/event/live/epic7/guide/images/hero/'+infos.hero_code+'_s.png')
        .addFields({name: 'Points : ', value : '```'+infos.winScore+ '```', inline: true }
        ,{name: 'Top : ', value : '```'+infos.topPercent+ ' %```', inline: true })
        .addFields({name: 'Winrate (Last 10 days) : ', value : '```'+infos.battle_info.win_score+ ' W | '+infos.battle_info.lose_score+' L```'})
        .setImage('https://static.smilegatemegaport.com/live/epic7stats/assets/images/common/grade/grade_'+rank_image_num+'.png')
        .addFields({ name: '\u200B', value: '\u200B' })
        .addFields({name: infos.hero_list[0].hero_code, value : '```'+infos.hero_list[0].win_score+ ' W | '+infos.hero_list[0].lose_score+' L```', inline: true }
        ,{name: infos.hero_list[1].hero_code, value : '```'+infos.hero_list[1].win_score+ ' W | '+infos.hero_list[1].lose_score+' L```', inline: true },
        {name: infos.hero_list[2].hero_code, value : '```'+infos.hero_list[2].win_score+ ' W | '+infos.hero_list[2].lose_score+' L```', inline: true }
        ,{name: infos.hero_list[3].hero_code, value : '```'+infos.hero_list[3].win_score+ ' W | '+infos.hero_list[3].lose_score+' L```', inline: true },
        {name: infos.hero_list[4].hero_code, value : '```'+infos.hero_list[4].win_score+ ' W | '+infos.hero_list[4].lose_score+' L```', inline: true })
        .setTimestamp();
    
    const profile = new ButtonBuilder()
        .setCustomId('profile')
        .setLabel('Profile')
        .setStyle(ButtonStyle.Secondary);

    const picks = new ButtonBuilder()
        .setCustomId('picks')
        .setLabel('Top 5 Picks')
        .setStyle(ButtonStyle.Secondary);
    
    const match = new ButtonBuilder()
        .setCustomId('matchs')
        .setLabel('Match History')
        .setStyle(ButtonStyle.Secondary);

    const buttons = new ActionRowBuilder()
        .addComponents(profile, picks, match);

    return [embed,buttons];
}

export async function getCardClaimLogs() {
    await fetchCommands();
    let logs = [];
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "card_claim" & logs.length < 15)
        logs.push({
            name: '```'+data[1].data.logs[i].optionalCardData.id + '``` **'+data[1].data.logs[i].optionalCardData.name+'** ('+data[1].data.logs[i].optionalCardData.sourceName+') ('+data[1].data.logs[i].optionalCardData.stars+'☆)',
            value : 'Claim by '+"["+data[1].data.logs[i].source.name+"](https://enderbot.com/game/profile/"+data[1].data.logs[i].source.id+")"
        });
    }
    return initEmbed(logs);
}
5
export async function getTreasureLogs() {
    await fetchCommands();
    console.log('yo');
    let logs = [];
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "treasure" & logs.length < 15) 
        logs.push({
            name: 'Shard : ```'+data[1].data.logs[i].content.shard + '``` | <:xp:1150372906325528596> : ```'+data[1].data.logs[i].content.xp + '``` | :star: : ```'+data[1].data.logs[i].content.mana + '``` | Combo : ```'+data[1].data.logs[i].content.combo+'```',
            value : 'Treasure recovered by '+"["+data[1].data.logs[i].source.name+"](https://enderbot.com/game/profile/"+data[1].data.logs[i].source.id+")"
        });
    }
    return initEmbed(logs);
}

export async function getCometLogs() {
    await fetchCommands();
    let logs = [];
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "comet" & logs.length < 15)
        logs.push({
            name: '```'+data[1].data.logs[i].content.comet + '```',
            value : 'Comet recovered by '+"["+data[1].data.logs[i].source.name+"](https://enderbot.com/game/profile/"+data[1].data.logs[i].source.id+")"
        });
    }
    return initEmbed(logs);
}

export async function getTradeLogs() {
    await fetchCommands();
    let logs = [];
    for (let i = 0; i < data[1].data.logs.length; i++) {
        if(data[1].data.logs[i].type == "trade" & logs.length < 15)
        console.log(data[1].data.logs[i]);
    }
    return initEmbed(logs);
}

export async function getProfile(profileName,regionTag) {
    let profile_id = "";
    let infos = {};
    await axios.get('https://static.smilegatemegaport.com/gameRecord/epic7/epic7_user_world_'+regionTag+'.json').then(resp => {
        let profile = resp.data;
        let profileData = profile.users.find(user => user.nick_nm === profileName);
        profile_id = profileData.nick_no;
        console.log(profileData);
    });
    await axios.post('https://epic7.gg.onstove.com/gameApi/getUserInfoSeason?nick_no='+profile_id+'&world_code=world_'+regionTag+'&lang=en&search_type=2&season_code=recent').then(resp => {
        infos = resp.data;
        console.log(infos.result_body);
    });
    return initProfileEmbed(infos.result_body);
}