
const express = require ('express');
const redis = require('redis');


const app = express();


// create and connect redis client to local instance.
const Redis = redis.createClient({
    host: "localhost",
    port: "6379"
});


Redis.set("name", "mike", redis.print);
Redis.get("name", redis.print);

Redis.on('connect', ()=> console.log('Redis is connected')).on('error', err => console.log(err));

    app.listen(3001,(err)=>{
        if(err) throw err;
        console.log(`======Connection started on`);
    });