module.exports = {
  name: 'alive',
  description: 'test command',
  execute(message, args) {
    message.channel.send('The assasins failed');
  }
}