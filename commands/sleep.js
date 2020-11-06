module.exports = {
  name: 'sleep',
  description: 'sleep related things',
  execute(message, time) {
    message.channel.send('It is ' + time + '. Go to sleep you filthy cabbage');
    message.member.roles.add('770825364612186122').catch(console.error);
  }
}