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

var secrets = JSON.parse(fs.readFileSync('./secrets.json', 'utf8'));
var client = new Twitter({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token_key: secrets.access_token_key,
  access_token_secret: secrets.access_token_secret
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
