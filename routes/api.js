var express = require('express');
var router = express.Router();
var search = require("./../modules/search.js");

/* GET users listing. */
router.get('/:hashtag', function(req, res, next) {
  console.log("Searching", req.params.hashtag);
  search.searchHashtag(req.params.hashtag)
      .then(function(result){
        res.json({"status" : "success", "result" : result });
      })
      .fail(function(err){
        console.error("Error", err);
        res.json({"status" : "error", "message" : err});
      });
});

module.exports = router;
