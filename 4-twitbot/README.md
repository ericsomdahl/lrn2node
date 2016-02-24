# trumptwit

Trolling twits for fun

## Getting Started
Install the module with: `npm install trumptwit`

```javascript
var trumptwit = require('trumptwit');
trumptwit.awesome(); // "awesome"
```

## Documentation

What are we doing?

  * Subscribe to a few "interesting" twitter accounts.  These accounts should be be few in number -- thought leaders for topics we want to interact with.  We won't interact with these accounts
  * Train a Markov chain with a corpus that is opposed to the philosophical bent of the seed accounts
  * Grab hashtags used by those seed accounts
  * Look for target accounts that use those same hashtags as the seeds
  * Use sentiment analysis on those tweets to find sympathetic accounts
  * Use Markov chain to reply to the target accounts on those hashtags
  * enjoy life

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2016 Eric Somdahl  
Licensed under the MIT license.
