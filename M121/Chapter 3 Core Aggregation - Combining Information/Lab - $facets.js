db.movies.aggregate([

{$match : {"imdb.rating": {$gte:0}, "metacritic" : {$gte:0}}},
{$facet:{

"top10rated_imdb" : [
{$sort : {"imdb.rating" : -1}},
{$limit: 10},
{$project: {title:1, _id:0}}
],

"top10rated_metacritic" : [
{$sort : {"metacritic" : -1}},
{$limit: 10},
{$project: {title:1, _id:0}}
]
}},

{$project : {
commonMovies : {$setIntersection : ["$top10rated_metacritic", "$top10rated_imdb"]}
}}

])