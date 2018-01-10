db.movies.aggregate([

{$project : {titles : {$split : ["$title" , " "]}}}
, {$match : {titles : {$size : 1}}}
])
.itcount()

