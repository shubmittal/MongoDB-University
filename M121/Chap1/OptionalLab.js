db.movies.aggregate([

{$project : 
{
adjustedCast : {$map : {input : "$cast", as: "cast", in : {$arrayElemAt: [{$split: ["$$cast", " ("]},0]}}},
adjustedWriters : {$map : {input : "$writers", as: "writer", in : {$arrayElemAt: [{$split: ["$$writer", " ("]},0]}}},
adjustedDirectors : {$map : {input : "$directors", as: "director", in : {$arrayElemAt: [{$split: ["$$director", " ("]},0]}}},
}},
{$project : {
commonPeople : {$setIntersection : ["$adjustedCast", "$adjustedWriters", "$adjustedDirectors"]} 
}},
{$addFields : {numCommon : {$size : {$ifNull : ["$commonPeople", []]}}}},
{$match : {numCommon : {$gte:1}}}

]).itcount()