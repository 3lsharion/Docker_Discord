import axios from 'axios';
import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import { card_claim, treasure, comet, trade } from '../log_models.js';

export async function fetchCommands() {
    await axios.get('https://enderbot.com/game/logs').then(resp => {
        // let data = resp.data.substring(resp.data.indexOf("logs:")+6, resp.data.indexOf('"uses":{}}];')-3);
        let data = resp.data.substring(resp.data.indexOf("const data = [{"), resp.data.indexOf('"uses":{}}];')+12);
        // let array = data.split("},{");
        // console.log(array[10]);
        console.log(data);
        fs.writeFile('logs.js', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}