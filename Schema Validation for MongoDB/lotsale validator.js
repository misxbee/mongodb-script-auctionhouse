db.createCollection("lotsale",{
validator:{
$jsonSchema:{
required:["_id", "BidderID", "LotNumber", "WinningPrice"],
properties:{
"_id": {
bsonType: 'string',
description: 'must be a string and required'
},
"BidderID": {
bsonType: 'string',
description: 'must be a string and required'
},
"LotNumber": {
bsonType: 'number',
description: 'must be a number'
},
"WinningPrice": {
bsonType: 'number',
description: 'must be a number and required'
}
}
}

},
validationAction: 'error'
})

