db.createCollection("auction", {
  validator: {
    $jsonSchema: {
      required: ["_id", "Location", "AuctionDate", "StaffID", "Lot", "Items"],
      properties: {
        _id: { bsonType: 'number', description: 'must be a number and required' },
        AuctionDate: { bsonType: 'string', description: 'must be a string and required' },
        StaffID: {
          bsonType: "array",
          description: "StaffID must be an array of strings",
          minItems: 1,
          items: { bsonType: "string" }
        },
        Location: { bsonType: 'string', description: 'must be a string' },
        Lot: {
          bsonType: 'array',
          required: ['LotNumber', 'LotDescription', 'ReservePrice', 'SellerID'],
          properties: {
            LotNumber: { bsonType: 'number' },
            LotDescription: { bsonType: 'string' },
            ReservePrice: { bsonType: 'string' },
            SellerID: { bsonType: 'number' }
          }
        },
        Items: {
          bsonType: 'array',
          description: 'must be an array',
          items: {
            bsonType: 'object',
            required: ['ItemID', 'ItemDescription'],
            properties: {
              ItemID: { bsonType: 'number' },
              ItemDescription: { bsonType: 'string' }
            }
          }
        }
      }
    }
  },
  validationAction: 'error'
});
