var pipeline = [

{$match : {$and : [{"imdb.rating" : {$gte : 7}} , 
  {genres : {$nin : ["Crime", "Horror"]}} ,
  {rated : {$in : ['G', 'PG']}},
  {languages : {$all : ["English", "Japanese"]}}
  
  
  ]}}

, {$project : {"imdb.rating":1, genres:1, rated: 1, languages:1, _id :0}}

]

//db.movies.aggregate(pipeline).itcount()

load('<location>\\validateLab1.js')

validateLab1(pipeline)
