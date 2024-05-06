# Social Media Integration

This package provides a simple way to integrate social media functionality into your JavaScript applications, focusing on Twitter integration.

## Installation

```
npm install social-media-integration
```

## Usage

```javascript
const SocialMediaIntegration = require('social-media-integration');

// Replace these values with your actual Twitter API keys
const twitterConfig = {
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
};

const socialMedia = new SocialMediaIntegration(twitterConfig);

socialMedia.postTweet('Hello from my Social Media Integration package!')
    .then(tweet => {
        console.log('Tweet posted:', tweet.text);
    })
    .catch(error => {
        console.error('Error posting tweet:', error);
    });
```

## Configuration

To use this package, you need to have a Twitter Developer account and create an app to obtain API keys. Replace `'YOUR_CONSUMER_KEY'`, `'YOUR_CONSUMER_SECRET'`, `'YOUR_ACCESS_TOKEN_KEY'`, and `'YOUR_ACCESS_TOKEN_SECRET'` with your actual Twitter API keys.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
