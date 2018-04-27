db.air_routes.aggregate([{
$match: { src_airport : {$in: ["JFK", "LHR"]},dst_airport : {$in: ["JFK", "LHR"]}}},
{$project: {"airlineName": "$airline.name", src_airport: 1, dst_airport:1 }},
{$lookup : {
  from: "air_alliances",
localField: "airlineName",
foreignField : "airlines",
as : "supported_alliances"
}},
{ $project : {airlineName :1, alliance: "$supported_alliances.name"}},
{$group : {_id : "$alliance", num_airlines : {$sum : 1}}}
])

