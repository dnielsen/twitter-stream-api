var config = {};

config.app = {
    name: "Twitter Stream",
    description: "Twitter Stream to Redis",
    version: "0.0.1",
    keyword: "#sxsw"
};

config.redis = {
    port: process.env.REDIS_PORT || '14026',
    host: process.env.REDIS_HOST || 'pub-redis-14026.us-east-1-4.6.ec2.redislabs.com',
    auth: process.env.REDIS_AUTH || 'deepblue'
};

config.twitter =
{
    consumer_key: 'kCrZff4YLq0MtRNFNcYlwsJBL',
    consumer_secret: 't5yqgsiwWertJyzcdEWi2hnSvbUKom69bPK0hCTx0kkpmBbZfk',
    access_token_key: '12051112-NR65bNMMcmqgZL1Vf2f3myekR0wmxJDZ4JFGKiuoV',
    access_token_secret: 'eKvrV80926rBpUq8sje2qz3k5GQaQbNN3j1xMB83HxpqJ'
};

module.exports = config;
