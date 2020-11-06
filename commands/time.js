module.exports = {
  name: 'time',
  description: 'prints time',
  execute(message, time) {
    message.channel.send('The time is ' + time);
  }
}