var pipeline = [

{$match : {$and : [{"imdb.rating" : {$gte : 7}} , 
  {genres : {$nin : ["Crime", "Horror"]}} ,
  {rated : {$in : ['G', 'PG']}},
  {languages : {$all : ["English", "Japanese"]}}
  
  
  ]}}

, {$project : {"rated":1, title:1, _id :0}}


]


load("C:\\Users\\shub_\\Desktop\\validateLab2.js")

validateLab2(pipeline)