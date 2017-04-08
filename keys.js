console.log('this is loaded');
exports.twitterKeys={
	consumer_key:'<zH0l3j9mGpkB93WxVeDB7Emcj>',
	consumer_secret:'<JyXhHzFdRCIyq4kqc7Ts7pfnkdBqRnLE0yM0q62F7m7u7pN8hz>',
	access_token_key:'<22717455-jhE0GhsCZrJpgUZZ7hJJrICeOFXM6rgZosIDEJ9O6>',
	access_token_secret:'<XT5jY3jWrjQVBuunxrHEFEbT28NIX9WHIpWHPFyK2ZQLe>',
}}
}
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});