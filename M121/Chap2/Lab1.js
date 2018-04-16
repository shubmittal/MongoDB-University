var favorites = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney"]
  
db.movies.aggregate([
{$match : {$and : [{"tomatoes.viewer.rating" : {$gte:3}},{countries : "USA"}]}},
{$project : {title:1, rating : "$tomatoes.viewer.rating", favActors : {$setIntersection : ["$cast", favorites]}}},
{$addFields: {num_favs : {$size : {$ifNull : ["$favActors", []]}}}},
{$sort : {num_favs: -1, rating:-1, title:-1}},
{$skip: 24}




])