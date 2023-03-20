const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
      name: 'random',
      description: 'Replies with a random number!',
    },
  ];

export function getCommands() {
    return commands;
}