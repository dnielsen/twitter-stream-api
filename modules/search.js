var config = require('./../config');
var stringHash = require('string-hash');
var async = require('async');
var Q = require('q');

// Set up connection to Redis
var redis = require("redis").createClient(
    config.redis.port,
    config.redis.host,
    {detect_buffers: true});

if (redis.auth) {
    redis.auth(config.redis.auth, function (err) {
        if (err) {
            console.error("Redis Authentication failed");
        } else {
        }
    });
}

exports.searchHashtag = function(hashtag) {
    var deferred = Q.defer();
    var score = stringHash(hashtag);
    var args1 = [ 'hashtagIndex', score, score ];

    redis.zrangebyscore(args1, function (err, response) {
        var result = [];
        if (err)
        {
            deferred.reject(err);
        } else {
            if (response.length ==0)
            {
                // No result
                deferred.resolve([]);
            } else {
                //console.log('Result', response);
                async.forEach(response, function (tweetId, callback) {
                    redis.hget("tweetIndex", tweetId, function (err, reply) {
                        // console.log(">>",reply);
                        result.push(reply);
                        callback();
                    });
                }, function (err) {
                    if (err)
                        deferred.reject(err); else
                        deferred.resolve(result);
                });
            }
        }

    });

    return deferred.promise;
};