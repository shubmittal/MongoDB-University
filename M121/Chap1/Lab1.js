var pipeline = [{$match : {$and : [
 
 {"imdb.rating": {$gte: 7}},
 {genres : {$nin: ["Crime", "Horror"]}},
 {rated : {$in : ["PG", "G"]}},
 {languages : {$all : ["English", "Japanese"]}}
 
  
  ]}}]
  
  
load("C:\\Users\\shub_\\Documents\\AllCodeBase\\MongoDB-University\\M121\\Chap1\\validateLab1.js")

validateLab1(pipeline)