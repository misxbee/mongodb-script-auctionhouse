db.createCollection("bidder",{
	validator:{
		$jsonSchema:{
			required:["_id", "Name"],
			properties:{
				"_id": {
					bsonType: 'string',
					description: 'must be a string and required'
				},
				"Name": {
					bsonType: 'string',
					description: 'must be a string and required'
				},
				"Address": {
					bsonType: 'string',
					description: 'must be a string'
				},
				"Telephone": {
					bsonType: 'string',
					description: 'must be a string and required'
				}
		}
		}
		
	},
	validationAction: 'error'
})