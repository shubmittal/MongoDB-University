db.movies.aggregate([

{$project : {_id:0,title:1, title_words: {$split: ["$title", " "]}}},
{$addFields :{ "num_words": {$size: "$title_words"}}},
{$match :{num_words :1} }

]).itcount()