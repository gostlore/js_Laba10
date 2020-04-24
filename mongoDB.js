let MongoClient = require("mongodb").MongoClient;
const request = require("request");
var url = 'https://www.shazam.com/shazam/v2/en-US/UA/web/-/tracks/artisttoptracks_18?startFrom=0&pageSize=20&connected=&channel='
request(url, (err, response, json) => {
     if (!err && response.statusCode === 200) {
        var obj = JSON.parse(json);
        for (var i = 0; i < 15; i++) {
            const mongoClient = new MongoClient("mongodb://localhost:8000/",  { useUnifiedTopology: true });
            mongoClient.connect(function(err, client){
                if(err){
                    return console.log(err);
                }

                const db = client.db("usersdb");
                const collection = db.collection("users");

                console.log((obj['chart'][i]['share']['subject'])+" "+(obj['chart'][i]['share']['href']))

                    client.close();

                    });
            };

        }
    });
