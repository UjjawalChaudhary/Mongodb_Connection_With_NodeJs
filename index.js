const express = require ('express');

const MongoConnect = require('./util/database')
const app = express();
PORT = 3000;

app.get('/', (req,res)=>
{
    console.log('hello');
})

MongoConnect((client) => {
    console.log(client);

    app.listen(PORT,() => {
        console.log('server');
    });
});
