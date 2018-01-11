db.movies.aggregate([

{$match : {$and : [
  {languages : {$exists :1}},
  {languages : "English"},
  {"imdb.rating"  : {$gte :1}}, 
  {"imdb.votes": {$gte :1}},
  {year : {$gte : 1990}} //Don't use {released : {$gt : ISODate("1989-12-31")}}  as some documents dont have released field
  ]}}
, 
{$addFields : {scaledVotes : 
 {
    $add: [
      1,
      {
        $multiply: [
          9,
          {
            $divide: [
              { $subtract: ["$imdb.votes", 5] },
              { $subtract: [1521105, 5] }
            ]
          }
        ]
      }
    ]
  }


}},

{$addFields : {normalized_rating : {$divide : [ {$add : ["$imdb.rating", "$scaledVotes"]}  , 2]}}},
{$sort : {normalized_rating : 1}}
  
])

