const config = require('./config.json');
const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./index.js', {
  token: config.token,
  autoSpawn: true
});
shard.on('message', (shard, message) => {
	console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
});
shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));