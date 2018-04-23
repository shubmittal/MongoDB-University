db.movies.aggregate([
{$match : {languages :{$in: [ "English"]}}},
{$project: {title:1, rating : "$imdb.rating", cast:1}},
{$unwind : "$cast" },
{$group: {
_id: "$cast",
numFilms: {$sum:1},
average : {$avg: "$rating"}
}},
{$sort : {numFilms : -1}}





])