module.exports = {
  name: 'rise',
  description: 'wake-up message',
  execute(message) {
    message.member.roles.remove('770825364612186122');
    message.channel.send('Rise and shine you filthy cabbage');
  }
}