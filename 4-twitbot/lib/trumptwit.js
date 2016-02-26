/*
 * trumptwit
 * https://github.com/ericsomdahl/lrn2node
 *
 * Copyright (c) 2016 Eric Somdahl
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs')
var Twitter = require('twitter');

var secrets = JSON.parse(fs.readFileSync('lib/secrets.json', 'utf8'));
var client = new Twitter({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token_key: secrets.access_token_key,
  access_token_secret: secrets.access_token_secret
});

var params = {screen_name: 'nodejs'};

client.stream('user', {track:'realDonaldTrump'}, function(stream) {
    stream.on('data', function(tweet) {
	console.log('----------');
        if(tweet.entities != null) {
       	   console.log(tweet.user['name']);
       	   console.log(tweet.text);
           console.log(tweet.entities['hashtags']);
        }
    });
    // Disconnect stream after five seconds
    setTimeout(stream.destroy, 5000);
});
