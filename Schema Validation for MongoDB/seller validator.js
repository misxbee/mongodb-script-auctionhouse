db.createCollection("seller",{
	validator:{
		$jsonSchema:{
			required:["_id", "SellerName"],
			properties:{
				"_id": {
					bsonType: 'number',
					description: 'must be a number and required'
				},
				"SellerName": {
					bsonType: 'string',
					description: 'must be a string and required'
				},
				"SellerAddress": {
					bsonType: 'string',
					description: 'must be a string'
				},
				"SellerTelephone": {
					bsonType: 'string',
					description: 'must be a string and required'
				}
		}
		}
		
	},
	validationAction: 'error'
})