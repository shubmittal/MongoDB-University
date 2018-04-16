var x_max = 1521105;
var x_min = 5;
var min = 1;
var max = 10;

  
db.movies.aggregate([
{$match : {$and : [ {languages: "English"}, {"imdb.rating" : {$gte:1}}, {"imdb.votes" : {$gte :1}}, {year : {$gte: 1990}}]}},
{$project : {title:1 , imdb_votes: "$imdb.votes",imdb_rating: "$imdb.rating"  ,_id:0}},
{$addFields: {scaled_votes : { $add: [1, {$multiply : [9, {$divide : [{$subtract : ["$imdb_votes", x_min]}, {$subtract : [x_max, x_min]}]}]}]}}},
{$addFields : {normalized_rating : {$avg : ["$scaled_votes","$imdb_rating" ]}}},
{$sort : {normalized_rating : 1}}

])