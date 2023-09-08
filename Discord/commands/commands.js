const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
      name: 'random',
      description: 'Replies with a random number!',
    },
    {
      name: 'card',
      description: 'Test command for card game!',
    },
    {
      name: 'fetch',
      description: 'Fetch the site logs!',
    },
  ];

export function getCommands() {
    return commands;
}