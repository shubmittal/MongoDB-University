var favorites = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney"];

db.movies.aggregate([
{$match : { $and : [{countries : "USA"}, {"tomatoes.viewer.rating" : {$gte : 3}}]}},
{$project : {_id: 0,countries:1,cast: 1, title:1, "tomatoes.viewer.rating":1, "title":1,  inter: {$setIntersection : ["$cast", favorites ]}}},
 {$addFields : {   num_favs :{$size : {$ifNull : ["$inter", []]}} }},
{$sort : {num_favs :-1, "tomatoes.viewer.rating" : -1, title:-1 }},
{$skip : 24}
])


//db.movies.find({}).limit(1).pretty()