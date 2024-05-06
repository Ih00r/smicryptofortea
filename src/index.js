// social-media-integration.js

const Twitter = require('twitter');

class SocialMediaIntegration {
    constructor(twitterConfig) {
        this.twitterClient = new Twitter(twitterConfig);
    }

    postTweet(tweetText) {
        return new Promise((resolve, reject) => {
            this.twitterClient.post('statuses/update', { status: tweetText }, (error, tweet, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(tweet);
                }
            });
        });
    }
}

module.exports = SocialMediaIntegration;

// Example usage
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
