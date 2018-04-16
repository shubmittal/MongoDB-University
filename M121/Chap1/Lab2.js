var pipeline = [{$match : {$and : [
 
 {"imdb.rating": {$gte: 7}},
 {genres : {$nin: ["Crime", "Horror"]}},
 {rated : {$in : ["PG", "G"]}},
 {languages : {$all : ["English", "Japanese"]}}
 
  
  ]}},
  
{$project: {_id:0, title :1 , rated:1} }
  
  ]
  
  
load("C:\\Users\\shub_\\Documents\\AllCodeBase\\MongoDB-University\\M121\\Chap1\\validateLab2.js")

validateLab2(pipeline)