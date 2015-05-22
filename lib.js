// Vote = {};
Vote = new Mongo.Collection("vote");


Unionize.hooks.vote = function(userId, docs, key){
  console.time('hooks.seen');
  log(arguments)
  console.timeEnd('hooks.seen');
}
Unionize.afterhooks.vote = function(userId, docs, key){
  console.time('afterhooks.seen');
  log(arguments)
  console.timeEnd('afterhooks.seen');
}