db.movies.aggregate([
{$match : {$and : [{directors : {$exists :1}}, {cast : {$exists :1}}, {writers : {$exists :1}} ]}},
{$project : {

directors : {$map : {
 input : "$directors",
 as : "director",
 in: {$arrayElemAt: [{ $split: [ "$$director", " (" ] },0 ]}
}},

cast : {$map : {
 input : "$cast",
 as : "cast",
 in: {$arrayElemAt: [{ $split: [ "$$cast", " (" ] },0 ]}
}},

writers : {$map : {
 input : "$writers",
 as : "writer",
 in: {$arrayElemAt: [{ $split: [ "$$writer", " (" ] },0 ]}
}}
}},
{$project : {commonPeople : {$setIntersection:[ "$directors", "$cast", "$writers"]} }},
{$addFields : { numCommon : {$size : {$ifNull : ["$commonPeople", []]}}}},
{$match : {numCommon : {$gt:0}}}
]).itcount()