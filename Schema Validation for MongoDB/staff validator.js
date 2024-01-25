db.createCollection("staff", {
    validator: {
        $jsonSchema: {
            required: ["Staffname", "Job_title"],
            properties: {
                StaffID: {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                Staffname: {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                Staffaddress: {
                    bsonType: 'string',
                    description: 'must be a string'
                },
                Staffphone: {
                    bsonType: 'string',
                    description: 'must be a string'
                },
                Job_title: {
                    bsonType: 'string',
                    description: 'must be a string and required'
                }
            }
        }
    },
    validationAction: 'error'
});