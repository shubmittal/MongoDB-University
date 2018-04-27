db.air_alliances.aggregate([

{$unwind: "$airlines"},
{$project: {name: 1, airlines:1}},
{$lookup:{
from: "air_routes",
localField: "airlines",
foreignField : "airline.name",
as : "supported_routes"
}},
{$unwind: "$supported_routes" },
//{$project : {name:1,"supported_routes.airline":1, "supported_routes.src_airport":1, "supported_routes.dst_airport":1 }},
{$match: { "supported_routes.src_airport"  : {$in: ["JFK", "LHR"]}, "supported_routes.dst_airport" : {$in: ["JFK", "LHR"]}}},
{$group: {_id: "$name", num_airlines: {$sum:1}}}

])